import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { updateUser } from "../../store/user/actions";
import "./profile.css";

export default function MyProfileCompo(props) {
  const { token, email } = props;
  console.log("token is:", token);
  const history = useHistory();
  const dispatch = useDispatch();

  if (token === null) {
    history.push("/");
  }

  const initialName = props.name;
  const initialPhone = props.phone;
  const initialAddress = props.address;

  console.log("initialName is:", initialName);
  console.log("initialPhone is:", initialPhone);
  console.log("initialAddress is:", initialAddress);

  const [username, setUsername] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);
  const [address, setAddress] = useState(initialAddress);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  console.log("name is:", username);
  console.log("phone is:", phone);
  console.log("address is:", address);

  //   console.log("test name is:", props.name);

  useEffect(() => {
    setUsername(initialName);
    setPhone(initialPhone);
    setAddress(initialAddress);
  }, [initialName, initialPhone, initialAddress]);

  const updateProfile = (event) => {
    event.preventDefault();

    if (password === rePassword) {
      dispatch(updateUser(phone, address, username, password));
      history.push("/myprofile");
    } else {
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          "Please enter correct password!",
          2000
        )
      );
    }
  };

  return (
    <div>
      <Container id="profileCompoContainer">
        <Form>
          <Row>
            <Col>
              <Jumbotron as={Col} className="mt-5">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label column sm="3" style={{ fontWeight: "bold" }}>
                    Email
                  </Form.Label>
                  <Col sm="6">
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
                      fontWeight: "bold",
                    }}
                  >
                    Name
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Col>
                </Form.Group>
              </Jumbotron>
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
                      fontWeight: "bold",
                    }}
                  >
                    Address
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicPhone"
                >
                  <Form.Label
                    column
                    sm="3"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Phone no.
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
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
                      fontWeight: "bold",
                    }}
                  >
                    New password
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
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
                      fontWeight: "bold",
                    }}
                  >
                    Re. new password
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="password"
                      placeholder="Confirm your new password"
                      onChange={(event) => setRePassword(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form as={Col} className="mt-5">
                <Form.Group className="mt-3">
                  {/* <Form.Label> </Form.Label> */}
                  <Row>
                    {/* <Col style={{ marginLeft: "50px" }}> */}
                    <Button
                      id="profileCompoButton"
                      variant="primary"
                      type="submit"
                      onClick={updateProfile}
                    >
                      Save
                    </Button>
                    {/* </Col> */}
                  </Row>
                  <Row>
                    {/* <Col style={{ marginRight: "50px" }}> */}
                    <Button
                      id="profileCompoButton"
                      variant="danger"
                      type="submit"
                      //   onClick={deleteProfile}
                    >
                      Delete account
                    </Button>
                    {/* </Col> */}
                  </Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
