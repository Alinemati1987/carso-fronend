import React from "react";
import { Link } from "react-router-dom";
import "./homecompon.scss";

export default function Brands(props) {
  const i = props.id;
  return (
    <div>
      <Link key={props.id} to={`/brands/${props.name}`}>
        <li>
          <img
            style={{ animationDelay: `${150 * i}ms` }}
            className="imageAnimation"
            src={props.brandLogo}
            alt={props.name}
          />
        </li>
      </Link>
    </div>
  );
}
