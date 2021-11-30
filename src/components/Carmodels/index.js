import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Models(props) {
  const { models } = props;

  console.log(props.ribbon);
  console.log("models is :", models);

  return (
    <div>
      <Jumbotron>
        <img
          style={{
            width: "60%",
            height: "60%",
            marginLeft: "20%",
            marginBottom: "20px",
          }}
          src={props.ribbon}
          alt="Carso"
        />
      </Jumbotron>

      {models.map((model, i) => (
        <Container key={i}>
          <Jumbotron
            style={{
              border: "solid 2px black",
              width: "50%",
              height: "50%",
              borderRadius: "30px",
              margin: "30px 25%",
              padding: "25px",
              textAlign: "center",
            }}
          >
            {model.imageUrl ? (
              <img
                className="d-block w-100"
                style={{
                  boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
                  borderRadius: "50px",
                  marginBottom: "20px",
                }}
                src={model.imageUrl}
                alt={model.modelName}
              />
            ) : null}

            <h1>{model.modelName}</h1>

            <Link to={`/brands/${props.name}/${model.id}`}>
              <Button
                style={{
                  boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
                  borderRadius: "30px",
                  backgroundColor: "#e5383b",
                  border: "#e5383b",
                }}
              >
                More details
              </Button>
            </Link>
          </Jumbotron>
        </Container>
      ))}
    </div>
  );
}
