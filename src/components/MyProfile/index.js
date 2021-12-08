import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./profileCompo.css";

export default function ProfileCompo(props) {
  const { id, address, email, name, phone, token, password } = props;

  const [username, setUserName] = useState(name);
  const [useremail, setUserEmail] = useState(email);
  const [useraddress, setUserAddress] = useState(address);
  const [userrephone, setUserPhone] = useState(phone);
  const [userpassword, setUserPassword] = useState(password);
  const [userrePassword, setUserRePassword] = useState("");

  const dispatch = useDispatch();
  //   const token = token;

  console.log("email is:", email);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div>
      <Container id="profileCompoContainer">
        <Row>
          <Col>
            <Form as={Col} className="mt-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3" style={{ fontWeight: "bolder" }}>
                  Email
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    style={{ color: "white" }}
                    plaintext
                    readOnly
                    defaultValue={email}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                <Form.Label
                  column
                  sm="3"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Name
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form as={Col} className="mt-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicAddress"
              >
                <Form.Label
                  column
                  sm="3"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Address
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(event) => setUserAddress(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicPhone">
                <Form.Label
                  column
                  sm="3"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Phone no.
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(event) => setUserPhone(event.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form as={Col} className="mt-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label
                  column
                  sm="3"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  New password
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(event) => setUserPassword(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label
                  column
                  sm="3"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Re. new password
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    type="password"
                    placeholder="Confirm your new password"
                    onChange={(event) => setUserRePassword(event.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form as={Col} className="mt-5">
              <Form.Group className="mt-3">
                <Form.Label> </Form.Label>
                <Col sm="7">
                  <Button
                    id="profileCompoButton"
                    variant="primary"
                    type="submit"
                    //   onClick={submitForm}
                  >
                    Save
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
