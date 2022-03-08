import React, { createContext, useState } from "react";

const PopupContext = createContext();

const PopupProvider = (props) => {

  const [popup, togglePopup] = useState(false);
  const [popupSource, setPopupSource] = useState();

  return (
    <PopupContext.Provider value={{ popupState: [popup, togglePopup], sourceState: [popupSource, setPopupSource] }}>
      {props.children}
    </PopupContext.Provider>
  )
}

export { PopupContext, PopupProvider }
