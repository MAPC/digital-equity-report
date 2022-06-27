import React, { useContext, useState } from "react";
import { PopupContext } from "../contexts/popupContext";
import { FaExpand } from "react-icons/fa";

const ImageModal = ({ source }) => {
  const { popupState, sourceState } = useContext(PopupContext);
  const [popup, togglePopup] = popupState;
  // eslint-disable-next-line no-unused-vars
  const [popupSource, setPopupSource] = sourceState;
  const [expand, toggleExpand] = useState(false);

  return (
    <div className="modal-container">
      <div>
        <img
          src={source}
          onClick={() => {
            setPopupSource(source);
            togglePopup(!popup);
          }}
          onMouseEnter={() => {
            toggleExpand(true);
          }}
          onMouseLeave={() => {
            toggleExpand(false);
          }}
        />
      </div>
      <div className="modal-expand-overlay">
        <FaExpand
          size={"2em"}
          style={expand ? { color: "#BEB6B6" } : { color: "black" }}
          onClick={() => {
            setPopupSource(source);
            togglePopup(!popup);
          }}
          onMouseEnter={() => {
            toggleExpand(true);
          }}
          onMouseLeave={() => {
            toggleExpand(false);
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
