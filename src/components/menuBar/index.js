import React, { useState } from "react";
import "./menubar.css";

export default function Menubar() {
  const [open, setOpen] = useState(false);
  const items = ["Login", "My profile", "Sign up"];

  return (
    <>
      {open && (
        <div className="menuBar">
          <ul>
            {items.map((text, i) => {
              return (
                <li key={i} style={{ animationDelay: `${150 * i}ms` }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul>
            <li className="alone">About us</li>
          </ul>
        </div>
      )}
      <button
        className="menuBarToggler"
        style={{ color: open ? "white" : "#E5383B" }}
        onClick={() => setOpen(!open)}
      >
        <svg width="3rem" height="2rem" viewBox="0 0 28 28">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="40" y2="4" />
            <line x1="0" y1="15" x2="28" y2="15" />
            <line x1="0" y1="25" x2="28" y2="25" />
          </g>
        </svg>
      </button>
    </>
  );
}
