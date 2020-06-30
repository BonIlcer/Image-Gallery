import React from "react";
import GalleryItem from "./GalleryItem";
import data from "../imgData";

function ImgGallery() {
  const galleryItems = data.map((item) => (
    <GalleryItem preview={item.preview} full={item.full} />
  ));
  return (
    <>
      <div className="gallery">{galleryItems}</div>
    </>
  );
}

export default ImgGallery;
