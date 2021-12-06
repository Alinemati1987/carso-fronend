import React from "react";
import { Button, Container, Jumbotron, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { selectToken } from "../../store/user/selectors";
import "./carkit.css";

export default function CarKits(props) {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const doIt = (e) => {
    console.log("doIt function");
    e.preventDefault();
    dispatch(
      showMessageWithTimeout("danger", true, "Please Login first", 2000)
    );
  };

  return (
    <div>
      <Jumbotron id="carKitJumbo">
        {props.imageUrl ? (
          <img
            className="d-block w-100"
            id="carKitImage"
            src={props.imageUrl}
            alt={props.kitName}
          />
        ) : null}
      </Jumbotron>
      <Container>
        <Table striped borderless hover variant="dark" width="600px">
          <tbody>
            <tr>
              <td width="200px">Kit name</td>
              <td width="200px">{props.kitName}</td>
            </tr>
            <tr>
              <td>Seller</td>
              <td>{props.seller.companyName}</td>
            </tr>
            <tr>
              <td>Status</td>
              {props.inStock ? (
                <td style={{ color: "green" }}>Available</td>
              ) : (
                <td style={{ color: "red" }}>Out of stock</td>
              )}
            </tr>
            <tr>
              <td>Price ( € )</td>
              {props.inStock ? <td>{props.kitPrice}</td> : <td> 0 </td>}
            </tr>
            <tr>
              <td colSpan="2">
                {props.inStock ? (
                  <Container id="carKitContainer">
                    {token ? (
                      <Link
                        to={`/checkout/${props.carModelId}/${props.id}/${props.seller.id}`}
                      >
                        <Button id="carKitButton">Buy</Button>
                      </Link>
                    ) : (
                      <Button id="carKitButton2" onClick={doIt}>
                        Buy
                      </Button>
                    )}
                  </Container>
                ) : null}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
