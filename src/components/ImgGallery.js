import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import data from "../imgData";
import Modal from "./Modal";

function ImgGallery() {
  const [fullImg, setFullImg] = useState("");
  const [modalMode, setModalMode] = useState(false);

  function onClickImg(imgSrc) {
    setFullImg(imgSrc);
    setModalMode(true);
  }

  const galleryItems = data.map((item, index) => (
    <GalleryItem
      key={index}
      preview={item.preview}
      full={item.full}
      onClickImg={onClickImg}
    />
  ));

  return (
    <>
      <div className="gallery">{galleryItems}</div>
      <Modal imgSrc={fullImg} modalMode={modalMode} setMode={setModalMode} />
    </>
  );
}

export default ImgGallery;
