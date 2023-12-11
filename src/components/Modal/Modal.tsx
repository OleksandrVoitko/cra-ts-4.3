import { FC, useEffect } from "react";
import { DivModal, DivOverlay } from "./Modal.styled";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  largeImg: string;
}

const modalRoot = document.querySelector("#modal-root");

export const Modal: FC<ModalProps> = ({ onClose, largeImg }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      console.log("Escape");
      onClose();
    }
  };

  const handleClickBackdrop = (event: MouseEvent) => {
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
