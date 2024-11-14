import { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";

import s from "./defaultModal.module.sass";

export type DefaultModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

const DefaultModal: FC<DefaultModalProps> = (
  { isOpen, onClose, children }
) => {
  console.log(isOpen);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default DefaultModal;