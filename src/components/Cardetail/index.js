import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Container, Jumbotron, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayPause from "../PlayButton";
import "./detailcar.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Cardetail(props) {
  // const audio = new Audio(props.soundUrl);
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Jumbotron id="cardetailJumbotron">
        {props.imageUrl ? (
          <img
            id="cardetailImg"
            className="d-block w-100"
            src={props.imageUrl}
            alt={props.modelName}
          />
        ) : null}
        <h2>
          I am <em>{props.modelName}</em>
        </h2>

        <h5 style={{ marginTop: "30px" }}>You can listen to me </h5>

        <audio ref={audioRef} src={props.soundUrl}></audio>
        <button onClick={clickbutton} id="cardetailPlayButton">
          <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} />
        </button>
      </Jumbotron>

      <Jumbotron id="cardetailJumbotron2">
        <Row>
          <Col data-aos="flip-left">
            <Container>
              <Table
                striped
                borderless
                hover
                variant="dark"
                id="cardetailTable"
              >
                <tbody>
                  <tr
                    className="cardetailTr"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <th colSpan="2">Specifications:</th>
                  </tr>
                  <tr>
                    <td width="300px">Acceleration ( 0 - 100 km/h )</td>
                    <td width="150px">{props.acceleration}</td>
                  </tr>
                  <tr>
                    <td>Capacity (cc)</td>
                    <td>{props.capacity}</td>
                  </tr>
                  <tr>
                    <td>Fuel consumption ( liter / 100 km )</td>
                    <td>{props.fuel}</td>
                  </tr>
                  <tr>
                    <td>Max speed ( km/h )</td>
                    <td>{props.speed}</td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                  </tr>
                  <tr className="cardetailTr">
                    <td>Car price is ( € )</td>
                    <td>{props.carPrice}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
          <Col style={{ margin: "auto 0" }} data-aos="flip-right">
            <Link
              to={{
                pathname: props.buyUrl,
              }}
              target="_blank"
            >
              <Button id="cardetailButton">Buy it now</Button>
            </Link>

            <h4 id="cardetailH4">
              Too expensive?! No worries.
              <br />
              We have some suggestions for you
            </h4>

            <Link to={`/kits/${props.modelName}/${props.id}`}>
              <Button id="cardetailButton2">See suggestions</Button>
            </Link>
          </Col>
        </Row>
      </Jumbotron>

      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
}
