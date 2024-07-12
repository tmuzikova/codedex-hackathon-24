import { Container } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-text">
        <div>Sip & Play</div>
        <div>
          Coded by <a href="https://github.com/tmuzikova">Tereza Muzikova</a>,
          Codédex Hackathon 2024
        </div>
      </Container>
    </footer>
  );
};
