import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalRegistro from "./ModalRegistro";

const NavbarMain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [registro, setRegistro] = useState(false);

  const handleCerrar = () => setRegistro(false);
  const handleMostrar = () => setRegistro(true);
  return (
    <>
      <Navbar bg="dark" expand="lg" className="bg-navbar">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/paginacontacto">
                <Nav.Link className="text-dark mb-1 mx-2" href="#pricing">
                  <div className="icono-call">
                    <ion-icon name="call"></ion-icon>
                  </div>
                </Nav.Link>
              </Link>
              <Nav.Link className="text-dark mb-1 mx-2" href="#home">
                <div className="icono-home">
                  <ion-icon name="home"></ion-icon>
                </div>
              </Nav.Link>
              <Nav.Link className="text-dark mb-1 mx-2" href="#features">
                <div className="icono-destacados">
                  <ion-icon name="heart"></ion-icon>
                </div>
              </Nav.Link>
            </Nav>
            <Container>
              <Form className="d-flex justify-content-center no-wrap ocultar-buscador">
                <Form.Control
                  type="search"
                  placeholder="Buscar..."
                  className="me-2 mb-2"
                  aria-label="Search"
                  size="sm"
                />
                <Button className="mb-2" size="sm">
                  <div className="icono-busqueda">
                    <ion-icon
                      className="icono-busqueda"
                      name="search-outline"
                    ></ion-icon>
                  </div>
                </Button>
              </Form>
            </Container>
            <Nav>
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center justify-content-center mx-1 mb-2"
                size="sm"
              >
                <div className="icono-fav">
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="m-1">
                  <b>Favoritos</b>
                </p>
              </Button>
              <Button
                variant="danger"
                className="d-flex align-items-center justify-content-center mx-1 mb-2"
                onClick={handleShow}
              >
                <div className="icono-login">
                  <ion-icon name="log-in-outline"></ion-icon>
                </div>
                <p className="m-1">
                  <b>Login</b>
                </p>
              </Button>
              <Button
                variant="primary"
                className="mx-1 mb-2"
                onClick={handleMostrar}
              >
                <p className="m-1">
                  <b>Registrarse</b>
                </p>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegistro registro={registro} handleCerrar={handleCerrar} />
    </>
  );
};

export default NavbarMain;
