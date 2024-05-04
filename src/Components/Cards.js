import React from "react";

export default function Cards(props) {
  return (
    <div>
      <h2>{props.data}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
