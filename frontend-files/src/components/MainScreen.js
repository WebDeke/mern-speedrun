import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h3 className="heading">{title}</h3>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
