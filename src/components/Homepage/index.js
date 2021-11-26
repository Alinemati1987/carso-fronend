import React from "react";
// import "./index.scss";

export default function Brands(props) {
  return (
    <div>
      {/* <p>Choose your brand</p> */}
      <div>
        <ul>
          {props.brands.map((b, i) => {
            return (
              <li key={i}>
                <img src={b} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
