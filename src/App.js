import React from "react";
import Cards from "./Components/Cards";
import { data } from "./data";

export default function App() {
  const dataShow = data.map((el) => {
    return <Cards key={el.id} data={el.title} desc={el.desc} />;
  });
  return (
    <div className="contianer">
      <h1>React App</h1>
      {dataShow}
    </div>
  );
}
