import React from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./carmodel.css";

export default function Models(props) {
  const { models } = props;

  console.log(props.ribbon);
  console.log("models is :", models);

  return (
    <div>
      <Jumbotron>
        <img id="carModelRibbon" src={props.ribbon} alt="Carso" />
      </Jumbotron>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        {models.map((model, i) => (
          <Col md="6">
            <Container key={i}>
              <Jumbotron id="carModelJumbotron">
                {model.imageUrl ? (
                  <img
                    className="d-block w-100"
                    id="carModelImg"
                    src={model.imageUrl}
                    alt={model.modelName}
                  />
                ) : null}
                <h1>{model.modelName}</h1>

                <Link to={`/brands/${props.name}/${model.id}`}>
                  <Button id="carModelButton">More details</Button>
                </Link>
              </Jumbotron>
            </Container>
          </Col>
        ))}
      </Row>
    </div>
  );
}
