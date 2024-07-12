import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import sipnplay from "../../assets/sipnplay.png";

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={sipnplay} alt="sipnplay-logo" className="sipnplay-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto me-auto justify-content-center flex-grow-1  navlinks">
              <Link href="/">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/events">Events</Link>
              <NavDropdown title="See more" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Collection
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://squareup.com/gift/SWP5P3242C38Q/order"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Giftcards
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
