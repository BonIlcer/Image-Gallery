import React from "react";
import "../App.scss";

function GalleryItem({ preview, full }) {
  return (
    <div className="img-container">
      <img src={preview} alt="img" dataoriginal={full} />
    </div>
  );
}

export default GalleryItem;
