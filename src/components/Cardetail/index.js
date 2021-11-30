import React, { useState, useRef } from "react";
import { Button, Container, Jumbotron, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayPause from "../PlayButton";

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
  return (
    <div>
      <Jumbotron
        style={{
          border: "solid 2px black",
          width: "40%",
          height: "40%",
          borderRadius: "30px",
          margin: "30px 30%",
          padding: "25px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.imageUrl ? (
          <img
            className="d-block w-100"
            style={{
              boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
            src={props.imageUrl}
            alt={props.modelName}
          />
        ) : null}
        <h2>{props.modelName}</h2>

        <table>
          <tr>
            <th
              style={{
                textAlign: "center",
                width: "200px",
              }}
            >
              Listen to me
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              <audio ref={audioRef} src={props.soundUrl}></audio>
              <button
                onClick={clickbutton}
                style={{
                  border: "none",
                  backgroundColor: "#E5383B",
                  boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
                  cursor: "pointer",
                  height: 50,
                  outline: "none",
                  borderRadius: "100%",
                  width: 50,
                }}
              >
                <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} />
              </button>
            </th>
          </tr>
        </table>
      </Jumbotron>
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
              <th colSpan="2">Specifications:</th>
            </tr>
            <tr>
              <td width="300px">Acceleration ( 0 - 100 km/h )</td>
              <td width="150px">{props.acceleration} s</td>
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
            <tr
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "25px",
              }}
            >
              <td>Car price is ( € )</td>
              <td>{props.carPrice} s</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to={{
            pathname: props.buyUrl,
          }}
          target="_blank"
        >
          <Button
            style={{
              boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
              borderRadius: "30px",
            }}
          >
            Buy it now
          </Button>
        </Link>
      </Container>
      <Container>
        <h4
          style={{
            fontFamily: "'Shadows Into Light', cursive",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
            color: "red",
          }}
        >
          Too expensive?! No worries.
          <br />
          We have some suggestions for you
        </h4>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`/kits/${props.modelName}/${props.id}`}>
          <Button
            style={{
              boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
              borderRadius: "30px",
            }}
          >
            See suggestions
          </Button>
        </Link>
      </Container>
    </div>
  );
}
