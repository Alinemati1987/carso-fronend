import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Jumbotron } from "react-bootstrap";
import "./loginpage.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      // window.location = document.referrer;
      // history.goBack();
      window.location.reload(history.goBack());
    }
    Aos.init({ duration: 1000 });
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Jumbotron id="loginJumbotron">
        <h4 id="forh4Login">Login</h4>
      </Jumbotron>

      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              data-aos="fade-right"
              className="mt-3 mb-4"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          {email === "" ? null : (
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                data-aos="fade-left"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Enter your Password"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mt-5">
            <Button
              data-aos="fade"
              style={{ marginBottom: "10px" }}
              variant="primary"
              type="submit"
              onClick={submitForm}
            >
              Log in
            </Button>
          </Form.Group>

          <Form.Group className="mt-3"></Form.Group>

          <Link to="/signup" className="linkTosignup" data-aos="fade">
            Click here to sign up
          </Link>
        </Form>
      </Container>
    </div>
  );
}
