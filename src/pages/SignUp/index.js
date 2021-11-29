import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  // console.log("isseller is:", isSeller);

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const handleCheck = () => {
    setIsSeller(!isSeller);
  };
  console.log("isSeller", isSeller);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, isSeller));

    setEmail("");
    setPassword("");
    setRePassword("");
    setName("");
    setIsSeller(false);
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h2 className="mt-3 mb-4">Signup</h2>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            Name
            <span
              style={{ color: "red", fontSize: "12px", paddingLeft: "5px" }}
            >
              *required
            </span>
          </Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter your name "
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter your email (We'll never share your email with anyone else)"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Set a password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicRePassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={rePassword}
            onChange={(event) => setRePassword(event.target.value)}
            type="password"
            placeholder="Re-enter your password"
            required
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <BootstrapSwitchButton
            checked={isSeller}
            onlabel="Yes"
            offlabel="No"
            onstyle="success"
            offstyle="danger"
            onChange={handleCheck}
          />
          <label style={{ margin: "10px" }}>Are you a Seller?</label>
        </Form.Group>

        <Form.Group className="mt-4">
          <Button
            style={{ marginBottom: "5px" }}
            variant="primary"
            type="submit"
            onClick={submitForm}
          >
            {!isSeller ? "Sign up" : "Step 1/2"}
          </Button>
        </Form.Group>

        <Form.Group className="mt-4"></Form.Group>

        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
