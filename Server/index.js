const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json())

const users = [
    {
        id: "1",
        username: "allen",
        password: "testPassword1",
        isAdmin: true,
    },
    {
        id: "2",
        username: "John",
        password: "testPassword2",
        isAdmin: false,
    }
]

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
    //take the refresh token from user
    const refreshToken = req.body.token

    //send error if there is no token or i's invalida
    if(!refreshToken) return res.status(401).json("You are not authenticated");
    if(!refreshToken.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid")
    }
    jwt.verify(refreshToken, "mySecretAwesomeRefreshKey",(err,user) => {
        err && console.log(err);
        refreshTokens = refreshToken.filter(token => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });
})

const generateAccessToken = (user) => {
     return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretAwesomeKey", {expiresIn: "30s"});
}
const generateRefreshToken = (user) => {
   return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretAwesomeRefreshKey");
}

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => {
        return u.username === username && u.password === password;
    });

    if (user) {
        // Generate an access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);

        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken
        });
    } else {
        res.status(400).json("Invaild Username or password");
    }
});

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretAwesomeKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        })
    } else {
        res.status(401).json("You are Not authorized")
    }
}

app.delete("/api/users/:userId", verify, (req, res) => {
    if (req, use.id === req.params.userId || req.user.isAdmin) {
        res.status(200).json("User has been deleted. ");
    } else {
        res.status(403).json("You are not allowed to delete this user! ");
    }
})

app.post("/api/logout", verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("Logged out successfully.")
});

app.listen(3001, () => console.log("Backend server is running on port 3001"));