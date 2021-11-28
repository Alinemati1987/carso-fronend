import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectToken, selectUser } from "../../store/user/selectors";

import Menubar from "../MenuBar";
import "./navig.css";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return (
    <Navbar bg="#0b090a" expand="lg" className="justify-content-center">
      <Menubar />
      <div
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "5rem",
          fontSize: "17px",
          paddingTop: "5px",
        }}
      >
        {!token
          ? null
          : !user.isSeller
          ? `Hello ${user.name} 🙍`
          : `Hello ${user.name} 🤵`}
      </div>

      <div>
        <Navbar.Brand
          style={{
            fontFamily: "'Comforter', cursive",
            fontWeight: "bold",
            fontSize: "40px",
            color: "#e5383b",
          }}
          as={NavLink}
          to="/"
        >
          Carso
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}

{
}
