import "./Menu.css";
import React from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { ThreeDPic } from "../3D components/ThreeDPic";
import { BobaMenu } from "./BobaMenu";
import { CoffeeMenu } from "./CoffeeMenu";
import { HotBitesMenu } from "./HotBitesMenu";
import { SandwichSaladMenu } from "./SandwichSaladsMenu";

export const Menu = () => {
  return (
    <Container>
      <h1 className="menu-heading">Menu</h1>
      <Tabs
        defaultActiveKey="coffee"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="coffee" title="Coffee">
          <Row>
            <Col xs={12} md={7}>
              <CoffeeMenu />
            </Col>
            <Col xs={12} md={5}>
              <ThreeDPic path="/cafe_latte_with_art.glb" size={[5, 5, 5]} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="boba" title="Boba">
          <Row>
            <Col xs={12} s={12} md={7}>
              <BobaMenu />
            </Col>
            <Col xs={12} s={12} md={5}>
              <div className="boba-pic">
                <ThreeDPic
                  path="/boba.glb"
                  size={[60, 60, 60]}
                  position={[3, 10, 10]}
                  fov={120}
                  height="700px"
                />
              </div>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="hot-bites" title="Hot Bites">
          <Row>
            <Col xs={12} s={12} md={7}>
              <HotBitesMenu />
            </Col>
            <Col xs={12} s={12} md={5}>
              <div className="fries-pic">
                <ThreeDPic
                  path="/fries.glb"
                  size={[3, 3, 3]}
                  position={[-15, 10, 5]}
                />
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="sandwiches-salads" title="Sandwiches & Salads">
          <Row>
            <Col xs={12} s={12} md={7}>
              <SandwichSaladMenu />
            </Col>
            <Col xs={12} s={12} md={5}>
              <ThreeDPic
                path="/blt_sandwich.glb"
                size={[10, 10, 10]}
                position={[-3, 5, 10]}
                fov={60}
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};
