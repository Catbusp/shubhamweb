import React from 'react';
import Close from './svgs/close.png';

const Modal = ({ show, close, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalContainer" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal_header">
          <h2 className="modal_header-title">{title}</h2>
          <button className="close" onClick={close}>
            <img src={Close.src} alt="close" />
          </button>
        </header>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KXItezz-BhA?si=ryhPNoRJWM89mDPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <footer className="modal_footer">
          <button className="modal-close" onClick={close}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
