import { Container, Table, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";
import sipnplay from "../../assets/sipnplay_comics.png";
import monopoly from "../../assets/monopoly3D.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

export const LandingPage = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col md={6} xs={12}>
          <h1>Who are we?</h1>
          <p className="who-are-we-text">
            Founder, Jonathan Li, couldn't choose between his love for board
            games, boba, and delicious food, so he decided to mix them all up
            into one fantastic concoction—thus, Sip & Play was born! Park
            Slope's first board game cafe is not just any cafe. It's a place
            where you can outwit your friends in a game of Catan while sipping
            on bubble tea and munching on a sandwich, all under one roof. With
            over 500 games in our{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="library_link"
            >
              library
            </a>
            , you'll never run out of fun things to do! And don't forget to fuel
            up with our coffee, espresso, boba, sandwiches, and snacks. Come for
            the games, stay for the food—because who doesn't love a good boba
            break between battles?
          </p>
          <div className="socials">
            <a
              href="https://www.instagram.com/sipnplaynyc/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram-icon"
                className="socials-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/sipnplaynyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook-icon"
                className="socials-icon"
              />
            </a>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <img
            src={sipnplay}
            alt="comics-like-sipnplay-image"
            className="comics_img"
          />
        </Col>
      </Row>
      <Container className="background-light-green">
        <Row className="mb-5 ">
          <Col md={6} xs={12}>
            <h2>Opening hours</h2>
            <Table className="mt-4 opening-hours-table">
              <tbody>
                <tr>
                  <td>
                    <strong>Sun</strong>
                  </td>
                  <td className="hours">10 am - 11 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mon</strong>
                  </td>
                  <td className="hours">11 am - 11 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tue</strong>
                  </td>
                  <td className="hours">11 am - 11 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Wed</strong>
                  </td>
                  <td className="hours">11 am - 11 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Thu</strong>
                  </td>
                  <td className="hours">11 am - 11 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fri</strong>
                  </td>
                  <td className="hours">11 am - 12 pm</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sat</strong>
                  </td>
                  <td className="hours">10 am - 12 pm</td>
                </tr>
              </tbody>
            </Table>
            <p>Please note our kitchen closes 2.5 - 3 hours before we close!</p>
          </Col>
          <Col md={6} xs={12}>
            <h2>Where to find us?</h2>
            <Table className="mt-4 mb-4 contact-table">
              <tbody>
                <tr>
                  <td>
                    <strong>Address</strong>
                  </td>
                  <td>471 5th Ave., Brooklyn NY 11215</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone</strong>
                  </td>
                  <td>718-971-1684</td>
                </tr>
                <tr>
                  <td>
                    <strong>E-mail</strong>
                  </td>
                  <td>sipnplaynyc@gmail.com</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://www.exploretock.com/sipnplay"
                className="reservation-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make a reservation
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={6} xs={12}>
          <img
            src={monopoly}
            alt="comics-like-sipnplay-image"
            className="monopoly_img"
          />
        </Col>
        <Col md={6} xs={12}>
          <h2>How it works</h2>
          <p className="how-it-works-text">
            Grab your friends, your family, and maybe even your neighbor's cat,
            and dive into our epic collection of over 500+ board games!
            <ul>
              <li>
                For just $10 a person, you get 3 hours of intense game time.
                Feeling fancy?
              </li>
              <li>
                On Fridays, Saturdays, Sundays, and holidays, it's $12 a person
                – because fun is slightly more premium on weekends!
              </li>
              Indulge in bubble tea, coffee, beer, sandwiches, or salads while
              you unleash your inner game champion.
              <li>
                And if you're the kind who likes to play it safe, reserve a
                table for $15 a person to guarantee your gaming throne for 3
                glorious hours.
              </li>
            </ul>
            <strong className="colored-text">
              Come on in and let the games begin!
            </strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
