import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const handleSubmitOrder = () => {
    console.log("This is test");
  };

  return (
    <div>
      <Container>
        <Table
          striped
          borderless
          hover
          variant="dark"
          width="600px"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <tbody>
            <tr>
              <td colSpan="2" rowSpan="2" width="300Px">
                {props.imageUrl ? (
                  <img
                    className="d-block w-100"
                    style={{
                      boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
                      borderRadius: "50px",
                      marginBottom: "20px",
                      width: "40",
                      height: "40%",
                    }}
                    src={props.imageUrl}
                    alt={props.modelName}
                  />
                ) : null}
              </td>
              <td width="auto">Car name:</td>
              <td> {props.modelName}</td>
            </tr>
            <tr>
              <td>Listen again</td>
              <td> {props.soundUrl}</td>
            </tr>
            <tr>
              <td>Kit name: </td>
              <td> {props.kitName}</td>
              <td colSpan="2" rowSpan="2" width="300px">
                {props.imageUrl ? (
                  <img
                    className="d-block w-100"
                    style={{
                      boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
                      borderRadius: "50px",
                      marginBottom: "20px",
                      width: "40",
                      height: "40%",
                    }}
                    src={props.kitimageUrl}
                    alt={props.kitName}
                  />
                ) : null}
              </td>
            </tr>
            <tr>
              <td>Seller name: </td>
              <td> {props.companyName}</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
        <Table
          striped
          borderless
          hover
          variant="dark"
          width="600px"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <tbody>
            <tr
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              <th colSpan="2">Shipping details:</th>
            </tr>
            <tr>
              <td width="auto">Reciever:</td>
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
              {/* <td>{props.address}</td> */}
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
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link to={`/save`}>
                    <Button
                      style={{
                        boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
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
            <tr>
              <td colSpan="4"></td>
            </tr>
            <tr
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "25px",
              }}
            >
              <td>Payment amount ( € )</td>
              <td> {props.kitPrice}</td>
            </tr>
            <tr>
              <td colSpan="4">
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
                        height: 50,
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
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
