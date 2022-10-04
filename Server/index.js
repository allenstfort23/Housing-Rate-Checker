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

app.post("/api/refresh", (req, res) => {
    //take the refresh token from user

    //send error if there is no token or i's invalida

    //create new token, refresh token
})
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => {
        return u.username === username && u.password === password;
    });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretAwesomeKey", {expiresIn: "15m"});
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken
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

app.listen(3001, () => console.log("Backend server is running on port 3001"));