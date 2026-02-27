import { MdSave, MdCancel } from "react-icons/md";
import type { ReactNode } from "react";

import "./popup.styles.css";

type PopupProps = {
  onSave: () => void;
  onCancel: () => void;
  children: ReactNode;
};

const Popup = ({ onSave, onCancel, children }: PopupProps) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <MdSave className="btnSave-edit" onClick={onSave}></MdSave>
        <MdCancel className="btnCancel-edit" onClick={onCancel} />
      </div>
    </div>
  );
};

export default Popup;
