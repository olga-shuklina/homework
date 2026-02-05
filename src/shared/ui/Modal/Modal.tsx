import React from 'react';
import ReactDOM from 'react-dom';
import Styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`${Styles.modal_overlay}`} onClick={onClose}>
      <div className={`${Styles.modal_content}`} onClick={e => e.stopPropagation()}>
        <button className={`${Styles.modal_close}`} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.body // Рендеринг в body, чтобы избежать проблем с позиционированием
  );
};

export default Modal;