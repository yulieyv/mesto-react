import React from "react";
import "../index.css";
import headerLogo from "../images/header-logo.svg";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип с надписью Место"
      />
    </div>
  );
}

export default Header;
