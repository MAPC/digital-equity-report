import React, { useContext, useState } from "react";
import { PopupContext } from "../contexts/popupContext";
import { FaExpand } from 'react-icons/fa';

const ImageModal = ({source}) => {

  const { popupState, sourceState } = useContext(PopupContext)
  const [popup, togglePopup] = popupState;
  const [popupSource, setPopupSource] = sourceState;
  const [expand, toggleExpand] = useState(false);

    return (
      <div>
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
        <div className="expand-overlay">
          <FaExpand 
            size={"3em"} 
            style={expand ? {color: "#FFE6AF"} : {color: "navy"}}             
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
  )
};

export default ImageModal;