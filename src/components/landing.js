import React from "react";
import Menu from "./modules/mainMenu";

const copy = {
  header: "Digital Access for all is Achievable",
  subheader: "A collection of resources and reports.",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tincidunt risus. Sed finibus tincidunt sapien, eu hendrerit justo accumsan ut. Vestibulum varius est malesuada malesuada fringilla. Mauris porta, dolor id feugiat semper, diam nunc dictum purus, vel eleifend ipsum velit nec metus."
}

const Landing = () => {
  return (
    <div className="landing padding">
      <Menu />
      <h1>{copy.header}</h1>
      <h2>{copy.subheader}</h2>
      <p>{copy.body}</p>
      {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
    </div>
  )
}

export default Landing