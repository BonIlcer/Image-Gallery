import React, { useState } from "react";

function Modal() {
  const imgSrc = "./img/2full.jpg";
  const [modalClass, setModalClass] = useState("modal");
  const [imgClass, setImgClass] = useState("full-img");
  function showModal() {
    setModalClass("modal open");
    setImgClass("full-img open");
  }
  return (
    <>
      <div className={modalClass}>
        <img src={imgSrc} alt="img" className={imgClass} />
      </div>
      <button onClick={showModal}>click</button>
    </>
  );
}

export default Modal;
