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


function NavBar() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Signing up is Free!
        </Tooltip>
    );

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand href="/">Housing Checker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 200, hide: 400 }}
                            overlay={renderTooltip}>
                            <Button variant="outline-primary" onClick={toggleShow} classNameName="me-2" size="sm">
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
                                    <a href='#'>Forgot password?</a>
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