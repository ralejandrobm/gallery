import React from "react";
import Envia from "./button";

function Modal({ isOpen, onClose, reinicia, children }) {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  const onClick = () =>{
      onClose()
      reinicia()
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
        <Envia onClick={onClick} > reinicia puntuaciones </Envia>
      </div>
    </div>
  );
}

export default Modal;
