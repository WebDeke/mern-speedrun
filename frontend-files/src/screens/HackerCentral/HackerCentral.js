import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import {
  Accordion,
  Card,
  ListGroup,
  Button,
  Row,
  Badge,
} from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Link from "react-router-dom";
import "./HackerCentral.css";
import hackers from "./hackers.js";

const HackerCentral = () => {
  return (
    <MainScreen title="Welcome to Hacker Central, Ameya.">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Select your preference</Accordion.Header>
          <Accordion.Body>Will add selection features later.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row>
        {hackers.map((hacker) => (
          <Card key={hacker._id} style={{ width: "18rem", margin: 10 }}>
            <Card.Header as="h5" id="card-header">
              {hacker.first_name} {hacker.last_name}
            </Card.Header>
            <Card.Body id="card-body">
              <ListGroup.Item>
                <Badge pill bg="dark">
                  {hacker.time_zone}
                </Badge>{" "}
                <Badge pill bg="info">
                  {hacker.status}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>Skills: {hacker.skills}</ListGroup.Item>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>More Info</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup.Item>
                      Education: {hacker.level_of_ed}
                    </ListGroup.Item>
                    <ListGroup.Item>Major: {hacker.major}</ListGroup.Item>
                    <ListGroup.Item>
                      <a href={hacker.github}>Github</a> |{" "}
                      <a href={hacker.devpost}>Devpost</a>
                    </ListGroup.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <ListGroup.Item>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    Email
                  </button>
                  <button type="button" class="btn btn-outline-success btn-sm">
                    Match with {hacker.first_name}
                  </button>
                </div>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <hr />
    </MainScreen>
  );
};

export default HackerCentral;
