import React from "react";
import "./fingers.css";

export default function Loading() {
  return (
    <div className="load_body">
      <div className="round">
        <div className="fingers">
          <div className="nails"></div>
        </div>
        <div className="fingers">
          <div className="nails"></div>
        </div>
        <div className="fingers">
          <div className="nails"></div>
        </div>
        <div className="fingers">
          <div className="nails"></div>
        </div>
        <div className="pollex"></div>
      </div>
    </div>
  );
}
