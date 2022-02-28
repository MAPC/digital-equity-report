import React from "react";

const CalloutQuote = ({quote, byline}) => {

  return (
    <div className="quote">
      <span className="quote__marks left">"</span>
      <div className="quote__copy">
        <h4>{quote}</h4>
        <h5 className="quote__copy-byline">{byline}</h5>
      </div>
      <span className="quote__marks right">"</span>
    </div>
  )
}

export default CalloutQuote