import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import "./menubar.css";
import { logOut } from "../../store/user/actions";

export default function Menubar() {
  const [open, setOpen] = useState(false);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const items = !token
    ? [
        // { text: "All Cars", address: "/allcars" },
        { text: "Login", address: "/login" },
        { text: "Sign up", address: "/signup" },
      ]
    : [
        // { text: "All Cars", address: "/allcars" },
        { text: "My profile", address: "/myprofile" },
      ];

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("our ref", ref.current.contains(event.target));
          console.log("Got here");
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
  }
  console.log("is it open", open);
  useOutsideAlerter(wrapperRef);
  return (
    <div ref={wrapperRef}>
      {open && (
        <div className="menuBar">
          <ul>
            {items.map((item, i) => {
              return (
                <li key={i} style={{ animationDelay: `${150 * i}ms` }}>
                  <a href={item.address}>{item.text}</a>
                </li>
              );
            })}
          </ul>

          {!token ? null : (
            <ul>
              <li>
                <button
                  style={{ animationDelay: `200ms` }}
                  className="bot"
                  onClick={() => dispatch(logOut())}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}

          <ul>
            <li className="alone">
              <a href="/aboutme">About me</a>
            </li>
          </ul>
        </div>
      )}

      <button
        className={"menuBarToggler"}
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
    </div>
  );
}
