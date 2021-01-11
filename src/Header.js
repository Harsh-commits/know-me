import React, { useState } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Wave, Random } from "react-animated-text";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={header ? "header active" : "header"}>
      <Navbar
        collapseOnSelect
        className="header_navbar "
        expand="lg"
        variant="dark"
      >
        <Link to="/">
          <Navbar.Brand className="nav_brand">
            <Wave text="Harsh Kumar" effect="fadeOut" effectChange={3.0} />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header_nav">
            <NavLink
              className="nav_link"
              exact
              to="/"
              activeClassName="nav_active"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="nav_link"
              activeClassName="nav_active"
              style={{ textDecoration: "none" }}
            >
              About
            </NavLink>

            <NavLink
              className="nav_link"
              exact
              to="/portfolio"
              activeClassName="nav_active"
              style={{ textDecoration: "none" }}
            >
              Portfolio
            </NavLink>

            <NavLink
              exact
              to="/blog"
              className="nav_link"
              activeClassName="nav_active"
              style={{ textDecoration: "none" }}
            >
              Blog
            </NavLink>

            <NavLink
              exact
              to="/contact"
              className="nav_link"
              activeClassName="nav_active"
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
