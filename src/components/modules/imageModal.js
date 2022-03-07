import React, { useContext, useState } from "react";
import { usePopup } from "../contexts/popupContext";

const ImageModal = ({source}) => {

  // const [popup, togglePopup] = usePopup();
  // const [popupSource, setPopupSource] = usePopup();

    return (
      <div>
        <img 
          src={source}
          // onClick={() => {
          //   setPopupSource(source);
          //   togglePopup(!popup);
          // }}
        />
      </div>
  )
};

export default ImageModal;