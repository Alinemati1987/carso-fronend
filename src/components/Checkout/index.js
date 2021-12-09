import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Row,
  Table,
} from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "../PlayButton";
import "./checkoutComp.css";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { updateUser } from "../../store/user/actions";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function CheckoutComponent(props) {
  const { token } = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState(props.phone);
  const [address, setAddress] = useState(props.address);
  const [username, setUsername] = useState(props.name);

  if (token === null) {
    history.push("/");
  }

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

  const saveHandler = (event) => {
    event.preventDefault();

    dispatch(updateUser(phone, address, username));
  };

  const fillDetails = () => {
    dispatch(
      showMessageWithTimeout(
        "danger",
        false,
        "Please fill all detail fields!",
        3000
      )
    );
  };

  //Here are the paypal setting

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: props.kitName,
            amount: {
              currency: "EUR",
              value: `${props.kitPrice}`,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("payer is:", payer);
      setSuccess(true);
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          ` Thank you for your purchase!, Your paypent ref. is: ${payer.payer_id}`,
          3000
        )
      );
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      history.push("/");
    }
  }, [success, history]);

  console.log(1, orderID);
  console.log(2, success);
  console.log(3, ErrorMessage);

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
                    <td width="100px">Reciever:</td>
                    <td>
                      <Form.Group controlId="formBasicName">
                        <Form.Control
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          type="name"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>
                      <Form.Group controlId="formBasicAddress">
                        <Form.Control
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                          type="address"
                          placeholder="Enter your address"
                          required
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <Form.Group controlId="formBasicPhone">
                        <Form.Control
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          type="phone"
                          placeholder="Enter your phone number"
                          required
                        />
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Container className="checkoutJumbotron2">
                        <Button
                          style={{
                            borderRadius: "30px",
                            marginRight: "30px",
                          }}
                          variant="primary"
                          type="submit"
                          onClick={saveHandler}
                        >
                          Save
                        </Button>
                        <span
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "15px",
                          }}
                        >
                          * Save address and phone in my profile
                        </span>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {phone === null ||
              phone === "" ||
              address === null ||
              address === "" ||
              username === null ||
              username === "" ? (
                <Button
                  style={{
                    borderRadius: "30px",
                    width: "250px",
                    marginLeft: "75px",
                  }}
                  variant="primary"
                  type="submit"
                  onClick={fillDetails}
                >
                  Pay
                </Button>
              ) : (
                <div
                  style={{
                    width: "250px",
                    marginLeft: "75px",
                  }}
                >
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AWSxRlsW8vkhrNDA_dYJ9xPUMGlTlW3YBxhtbcUUmWnOdHFILnoQnftRCbZzx28Ns4BPIa5ccMcXDYqX",
                    }}
                  >
                    <PayPalButtons
                      style={{
                        layout: "horizontal",
                        shape: "pill",
                        label: "pay",
                        tagline: "false",
                        height: 50,
                      }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                  </PayPalScriptProvider>
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </Jumbotron>
      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
}
