import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./components/Landing-Page/LandingPage";
import { Footer } from "./components/Footer/Footer";

import { EventCalendar } from "./components/Events/EventCalendar";

import { Menu } from "./components/Menu/Menu";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Container className="app-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
