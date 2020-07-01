import React from "react";
import "../App.scss";

function GalleryItem({ preview, full, onClickImg }) {
  return (
    <div className="img-container">
      <img
        src={preview}
        alt="img"
        onClick={() => {
          onClickImg(full);
        }}
      />
    </div>
  );
}

export default GalleryItem;
