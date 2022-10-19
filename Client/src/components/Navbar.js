import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../stylesheets/Navbar.css"
import axios from "axios"


function NavBar() {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/login", { username, password })
        } catch (err) {
            console.log(err);
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Signing up is Free!
        </Tooltip>
    );


    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container fluid>
                <Navbar.Brand className="link-style" href="/">Housing Checker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="link-style" href="/">Home</Nav.Link>
                        <Nav.Link className="link-style" href="/features">Features</Nav.Link>
                    </Nav>
                    <Nav>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 200, hide: 400 }}
                            overlay={renderTooltip}>
                            <Button variant="outline-primary" onClick={toggleShow} className="me-2" size="sm">
                                Signup/Login
                            </Button>
                        </OverlayTrigger>

                        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Login</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                This will be used to sign in or log in
                                <div>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3">
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </div>
                                <div className="mt-2">
                                    <Button variant="outline-primary" onClick={toggleShow} className="me-2" size="sm">
                                        Login
                                    </Button>
                                    <a className="text-muted fs-6 fw-light" href='#'>Forgot password?</a>
                                </div>
                                <div className="mt-5">
                                    <p>Don't have an account? <a href='/signup'>Click Here To Sign Up</a></p>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar