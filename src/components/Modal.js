import React from "react";

function Modal({ imgSrc, modalMode, setMode }) {
  const modalClass = modalMode ? "modal open" : "modal";
  const imgClass = modalMode ? "full-img open" : "full-img";

  function closeModal(e) {
    //console.log(e.target.classList);
    if (e.target.classList.contains("modal")) {
      setMode(false);
    }
  }

  return (
    <>
      <div className={modalClass} onClick={closeModal}>
        <img src={imgSrc} alt="img" className={imgClass} />
      </div>
    </>
  );
}

export default Modal;
