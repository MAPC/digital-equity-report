import React from "react";

const Slides = () => {

  const slidesSources = [
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      embed: "https://slides.com/mapc/internet-slides/embed"
    }
  ]

  const slidesCitations = slidesSources.map((citation, index) => {
    return <div key={index} className="section">
        <a href={citation.link}>
          <h4>{citation.title}</h4>
        </a>
        <iframe src={citation.embed} width="100%" height="480" title={citation.title} scrolling="no" frameborder="0" allowfullscreen></iframe>
    </div>
  })

  return (
    <div>
      {slidesCitations}
    </div>
  )
}

export default Slides