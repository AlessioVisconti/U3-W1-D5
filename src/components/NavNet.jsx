import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, NavLink } from "react-router";

function NavNet() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link to="/" className="fw-bold text-white me-5">
              Home
            </Link>
            <Link to="/TvShows" className="fw-bold text-white me-5">
              TV Shows
            </Link>
            {/* <Link to={`/MovieDetails/${id}`} className="fw-bold text-white me-5">
              MoviesDetails
            </Link> */}
            <Link className="fw-bold text-white me-5">Recently Added</Link>
            <Link className="fw-bold text-white me-5">My List</Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search fs-5 me-3 text-white"></i>
            <div id="kids" className="fw-bold me-3">
              KIDS
            </div>
            <i className="bi bi-bell fs-5 me-3 text-white"></i>
            <i className="bi bi-person-circle fs-5 text-white"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavNet;
