import React, { useState } from "react";

function Modal() {
  const imgSrc = "./img/2full.jpg";
  const [modalClass, setModalClass] = useState("modal");
  const [imgClass, setImgClass] = useState("full-img");
  function showModal() {
    setModalClass("modal open");
    setImgClass("full-img open");
  }
  function closeModal(e) {
    if (e.target.classList.contains("modal")) {
      setModalClass("modal");
      setImgClass("full-img");
    }
  }

  return (
    <>
      <div className={modalClass} onClick={closeModal}>
        <img src={imgSrc} alt="img" className={imgClass} />
      </div>
      <button onClick={showModal}>click</button>
    </>
  );
}

export default Modal;
