import { Component, useEffect } from "react";
import { DivModal, DivOverlay } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, largeImg }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      console.log("Escape");
      onClose();
    }
  };

  const handleClickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <DivOverlay onClick={handleClickBackdrop}>
      <DivModal>
        <img src={largeImg} alt="" />
      </DivModal>
    </DivOverlay>,
    modalRoot
  );
};
