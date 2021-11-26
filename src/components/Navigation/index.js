import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menubar from "../menuBar";

export default function Navigation() {
  // const token = useSelector(selectToken);
  // const { isArtist } = useSelector(selectUser);

  // const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="#0b090a" expand="lg" className="justify-content-center">
      <Menubar />
      <Navbar.Brand
        style={{
          fontFamily: "'Comforter', cursive",
          fontWeight: "bold",
          fontSize: "40px",
          color: "white",
          "&:hover": {
            color: "yellow",

            //           text-shadow: 2px 2px 2px #e5383b, 2px 2px 2px;
            // transform: scale(1.2);
            // transition: all 0.2s ease;
          },
        }}
        as={NavLink}
        to="/"
      >
        Carso
      </Navbar.Brand>
    </Navbar>
  );
}
