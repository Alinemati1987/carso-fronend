import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Jumbotron } from "react-bootstrap";
import "./signuppage.css";
import Aos from "aos";
import "aos/dist/aos.css";

import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { showMessageWithTimeout } from "../../store/appState/actions";

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
    Aos.init({ duration: 1000 });

    if (token !== null) {
      history.goBack();
      window.location.reload();
    }
  }, [token, history]);

  const handleCheck = () => {
    setIsSeller(!isSeller);
  };
  console.log("isSeller", isSeller);

  function submitForm(event) {
    event.preventDefault();

    if (password === rePassword) {
      dispatch(signUp(name, email, password, isSeller));

      setEmail("");
      setPassword("");
      setRePassword("");
      setName("");
      setIsSeller(false);
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
  }

  return (
    <div>
      <Jumbotron id="signupJumbotron">
        <h4 id="forh4signup">Signup </h4>
      </Jumbotron>

      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicName">
            <Form.Control
              data-aos="flip-up"
              className="mt-3 mb-4"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Let us know your name "
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              data-aos="flip-up"
              className="mt-3 mb-4"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="What is your email? (Be sure we'll never share your email with anyone else)"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              data-aos="flip-up"
              className="mt-3 mb-4"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Set a remembering and strong password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicRePassword">
            <Form.Control
              data-aos="flip-up"
              className="mt-3 mb-4"
              value={rePassword}
              onChange={(event) => setRePassword(event.target.value)}
              type="password"
              placeholder="ٔNow try to remember your password"
              required
            />
          </Form.Group>

          <Form.Group className="mt-3" data-aos="flip-up">
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

          <Form.Group className="mt-5">
            <Button
              data-aos="fade"
              style={{ marginBottom: "5px" }}
              variant="primary"
              type="submit"
              onClick={submitForm}
            >
              {!isSeller ? "Sign up" : "Step 1/2"}
            </Button>
          </Form.Group>

          <Form.Group className="mt-3"></Form.Group>

          <Link to="/login" className="linkTosignin" data-aos="fade">
            Click here to log in
          </Link>
        </Form>
      </Container>
    </div>
  );
}
