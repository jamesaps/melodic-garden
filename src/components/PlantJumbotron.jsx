// import React from 'react';
import image from "../images/5.png";

function PlantJumbotron() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}
    >
      <img
        src={image}
        style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

export default PlantJumbotron;
