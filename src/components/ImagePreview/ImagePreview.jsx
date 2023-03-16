import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./_imagesPreview.scss";

const ImagePreview = ({ src, alt }) => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleOpenModal}
        className="ImagePreview__image"
      />
      {modal && (
        <div className="ImagePreview__modal" onClick={handleCloseModal}>
          <figure className="modal__container">
            <img src={src} alt={alt} />
          </figure>
          <div className="modal__close" onClick={handleCloseModal}>
            <AiOutlineClose color="white" size={20} />
          </div>
        </div>
      )}
    </>
  );
};

export { ImagePreview };
