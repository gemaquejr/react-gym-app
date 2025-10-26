import React from "react";
import Button from "./Button";

function Header() {
  return (
    <header id="main">
      <div className="header-heading">
        <h2>FORTALEÇA SEU</h2>
        <h1>
          <span>CORPO E SUA SAÚDE</span> CONOSCO
        </h1>
        <p className="details">
          Construa seu corpo e condicionamento físico com toque profissional
        </p>
        <div className="header-btns">
          <Button type="submit">
            {"começar"}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
