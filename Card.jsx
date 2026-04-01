// Card.jsx
import React from "react";
import "./Card.css";

function Card({ title, desc }) {
  return (
    <div className="card"> {/* use 'card' to match Home.css */}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card