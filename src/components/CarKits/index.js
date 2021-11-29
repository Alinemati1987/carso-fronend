import React from "react";
import { Button, Container, Jumbotron, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { selectToken } from "../../store/user/selectors";

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
            alt={props.kitName}
          />
        ) : null}
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
            <tr>
              <td width="300px">Kit name</td>
              <td width="150px">{props.kitName} s</td>
            </tr>
            <tr>
              <td>Seller</td>
              <td>----</td>
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
                  <Container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {token ? (
                      <Link to={"/checkout"}>
                        <Button
                          style={{
                            boxShadow:
                              " 5px 3px 5px lightblue , 3px 3px 3px grey",
                            borderRadius: "30px",
                            width: "100px",
                          }}
                        >
                          Buy
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        style={{
                          boxShadow:
                            " 5px 3px 5px lightblue , 3px 3px 3px grey",
                          borderRadius: "30px",
                          width: "100px",
                        }}
                        onClick={doIt}
                      >
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
