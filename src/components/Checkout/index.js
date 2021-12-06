import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PlayPause from "../PlayButton";
import "./checkoutComp.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutComponent(props) {
  const { token } = useSelector(selectUser);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  const initialOptions = {
    "client-id":
      "AetKN2v5JcSKAoex0T4qdtg0SwvK5-g2JRI71jz-W3aNodlrP3A0SqmHJ0yYVBnrbYTgfTCxyA71LtIc",
    currency: "EUR",
    intent: "sb-8y7if8779784",
    "data-client-token": "abc123xyz==",
  };

  const audioRef = useRef();
  const [showPlayButton, setShowPlayButton] = useState(true);

  const clickbutton = () => {
    if (showPlayButton) audioRef.current.play();
    if (!showPlayButton) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setShowPlayButton(!showPlayButton);
  };

  const handleSubmitOrder = () => {
    console.log("This is test");
  };

  return (
    <div>
      <Jumbotron style={{ marginBottom: "20px" }}>
        <Row className="checkoutJumbotron2" id="animationOne">
          <Col md="4">
            <Container>
              {props.imageUrl ? (
                <img
                  className="d-block w-100"
                  src={props.imageUrl}
                  alt={props.modelName}
                />
              ) : null}
            </Container>
          </Col>
          <Col
            md="2"
            style={{
              textAlign: "left",
              paddingLeft: "60px",
            }}
          >
            <h4>Car name: </h4>
            <br />
            <h4>Listen again: </h4>
          </Col>
          <Col md="2" style={{ margin: "auto 0" }}>
            <h5>{props.modelName} </h5>
            <br />
            <h5>
              <audio ref={audioRef} src={props.soundUrl}></audio>
              <button onClick={clickbutton} id="checkoutPlayButton">
                <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} />
              </button>
            </h5>
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row className="checkoutJumbotron2" id="animationTwo">
          <Col
            md="2"
            style={{ margin: "auto 0", textAlign: "left", width: "150px" }}
          >
            <h4>Kit name: </h4>
            <br />
            <h4>Seller: </h4>
          </Col>
          <Col md="2" style={{ margin: "auto 0", textAlign: "left" }}>
            <h5>{props.kitName}</h5>
            <br />
            <h5>{props.companyName}</h5>
          </Col>
          <Col md="4">
            <Container>
              {props.imageUrl ? (
                <img
                  className="d-block w-50"
                  style={{ margin: "0 auto" }}
                  src={props.kitimageUrl}
                  alt={props.kitName}
                />
              ) : null}
            </Container>
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className="cardetailJumbotron2" id="animationThree">
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <Container>
              <Table striped borderless hover variant="dark" width="600px">
                <tbody>
                  <tr className="checkoutTableTopic">
                    <th colSpan="2">Shipping details:</th>
                  </tr>
                  <tr>
                    <td width="50px">Reciever:</td>
                    <td width="300px">{props.name}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          value={props.address}
                          onChange={(event) => console.log(event.target.value)}
                          type="email"
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{props.phone}</td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Container className="checkoutJumbotron2">
                        <Link to={`/save`}>
                          <Button
                            style={{
                              borderRadius: "30px",
                              marginRight: "30px",
                            }}
                          >
                            Save
                          </Button>
                        </Link>
                        <td
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "15px",
                          }}
                        >
                          * Save address and phone in my profile
                        </td>
                      </Container>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>

          <Col className="cardetailJumbotron2" style={{ margin: "auto 0" }}>
            <Jumbotron
              style={{
                marginBottom: "30px",
              }}
            >
              <Row
                className="checkoutJumbotron2"
                style={{
                  margin: "auto 0",
                  color: "#ffb703",
                }}
              >
                <Col
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h4>Payment amount :</h4>
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <h5>{props.kitPrice} €</h5>
                </Col>
              </Row>
            </Jumbotron>

            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AetKN2v5JcSKAoex0T4qdtg0SwvK5-g2JRI71jz-W3aNodlrP3A0SqmHJ0yYVBnrbYTgfTCxyA71LtIc",
                  currency: "EUR",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    shape: "pill",
                    label: "pay",
                    height: "50px",
                  }}
                  onApprove={(event) => handleSubmitOrder(event)}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: `${props.kitPrice}`,
                          },
                        },
                      ],
                    });
                  }}
                />
              </PayPalScriptProvider>
            </Container>
          </Col>
        </Row>
      </Jumbotron>
      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
}
