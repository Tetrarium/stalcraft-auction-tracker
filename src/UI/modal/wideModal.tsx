import { FC } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import ReactDOM from "react-dom";

// interface ModalProps {
//   show: 
// }

const WideModal: FC<ModalProps> = ({ children, ...other }) => {
  return ReactDOM.createPortal(
    <Modal {...other} show={true} fullscreen>
      {children}
    </Modal>,
    document.getElementById('modal-root')!
  );
};

export default WideModal;