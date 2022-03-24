import React from "react";
import thumbnail from "../../images/thumbnail.png"

const Slides = () => {

  const slidesSources = [
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      thumbnail: thumbnail
    },
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      thumbnail: thumbnail
    },
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      thumbnail: thumbnail
    },
    {
      title: "Journey Through the Internet",
      link: "https://slides.com/mapc/internet-slides/",
      thumbnail: thumbnail
    }
  ]

  const slidesCitations = slidesSources.map((citation, index) => {
    return <div key={index}>
      <img src={citation.thumbnail} />
      <a href={citation.link} target="blank">
        <h4 className="citation__link citation__link-below">{citation.title}</h4>
      </a>
    </div>
  })

  return (
    <div>
      <div className="section-two-col">
        {slidesCitations}
      </div>
    </div>
  )
}

export default Slides