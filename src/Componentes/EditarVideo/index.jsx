import close from '../../assets/X - cancel.png'
import { Fragment } from "react";
import "./overlay.css";

export function Edit({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="edit">
          <div className="edit__background" onClick={onClose} />
          <div className="edit__container">
            <button
              className="edit__close"
              type="button"
              onClick={onClose}
              ><img style={{width:'52px'}} src={close} alt="fechar"/>
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Edit;