import React from "react";
import { Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Form your squad with HackerMatch!</h1>
              <p className="subtitle">
                The best way to find teammates for hackathons.
              </p>
            </div>
            <div className="buttoncontainer">
              <a href="/signup" className="btn btn-primary">
                Sign Up
              </a>{" "}
              <a href="/login" className="btn btn-outline-primary">
                Login
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
