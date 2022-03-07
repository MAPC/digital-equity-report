import React, { createContext, useState } from "react";

//create a context, with createContext api
export const PopupContext = createContext();

export const PopupProvider = (props) => {
  // this state will be shared with all components 
  const [popup, togglePopup] = useState(true);
  const [popupSource, setPopupSource] = useState();

  return (
    <PopupContext.Provider value={[[popup, togglePopup], [popupSource, setPopupSource]]}>
        {props.children}
    </PopupContext.Provider>
  );
};
