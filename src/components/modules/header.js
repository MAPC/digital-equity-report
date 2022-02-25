import React from "react";
import { Link } from "gatsby"
import Menu from "./mainMenu";

const Header = () => {
  return (
    <div>
      <Link to="/">MAPC Logo</Link>
      <Menu />
    </div>
  )
}

export default Header