import React from "react";
import GalleryItem from "./GalleryItem";
import data from "../imgData";
import Modal from "./Modal";

function ImgGallery() {
  const galleryItems = data.map((item, index) => (
    <GalleryItem key={index} preview={item.preview} full={item.full} />
  ));

  return (
    <>
      <div className="gallery">{galleryItems}</div>

      <Modal />
    </>
  );
}

export default ImgGallery;
