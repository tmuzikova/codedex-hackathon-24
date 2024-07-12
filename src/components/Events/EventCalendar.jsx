import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import events from "./events.json";
import diceAndSlice from "../../assets/Dice_and_Slice_Night.png";
import meeples from "../../assets/Meeples_and_Margaritas.png";
import catan from "../../assets/Catan_and_Coffee.png";
import pandemic from "../../assets/Pandemic_and_Pints.png";
import monopoly from "../../assets/Monopoly_Madness.png";
import chess from "../../assets/Chess_and_Cheers.png";
import scrabble from "../../assets/Scrabble_Scramble.png";
import ticket from "../../assets/Ticket_to_Ride_Tournament.png";
import clue from "../../assets/Clue_and_Cocktails.png";
import kittens from "../../assets/Exploding_Kittens_Extravaganza.png";
import calendar from "../../assets/calendar.png";
import time from "../../assets/clock.png";
import price from "../../assets/dollar.png";
import "./EventCalendar.css";

export const EventCalendar = () => {
  const eventImages = {
    0: diceAndSlice,
    1: meeples,
    2: catan,
    3: pandemic,
    4: monopoly,
    5: chess,
    6: scrabble,
    7: ticket,
    8: clue,
    9: kittens,
  };

  return (
    <Container fluid>
      <h1 className="events-header">Upcoming Events</h1>
      <Row className="justify-content-center">
        {events.map((event) => (
          <Col
            md={6}
            xs={12}
            key={event.id}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="w-100" style={{ maxWidth: "29rem" }}>
              <Card.Img variant="top" src={eventImages[event.id]} />
              <Card.Body>
                <Card.Title>
                  <h2 className="event-header">{event.name}</h2>
                </Card.Title>
                <Card.Text>
                  <div>{event.description}</div>
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <img
                      src={calendar}
                      alt="calendar-icon"
                      style={{ width: "1.5rem", marginRight: "10px" }}
                    />
                    {event.date}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={time}
                      alt="time-icon"
                      style={{ width: "1.5rem", marginRight: "10px" }}
                    />
                    {event.time}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={price}
                      alt="price-icon"
                      style={{ width: "1.5rem", marginRight: "10px" }}
                    />
                    Box reservation price: {event.box_reservation_price} $
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
