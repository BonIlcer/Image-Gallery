import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <h1>Image Gallery</h1>
      <div className="gallery">
        <div className="img-container">
          <img src={"./img/1.jpg"} alt="img" dataOriginal="./img/1full.jpg" />
        </div>
        <div className="img-container">
          <img src="./img/2.jpg" alt="img" dataOriginal="./img/2full.jpg" />
        </div>
        <div className="img-container">
          <img src="./img/3.jpg" alt="img" dataOriginal="./img/3full.jpg" />
        </div>
        <div className="img-container">
          <img src="./img/4.jpg" alt="img" dataOriginal="./img/4full.jpg" />
        </div>
      </div>
    </>
  );
}

export default App;
