import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      Made by Om Bhagat. Get Code on &nbsp;
      <Link
        to={`https://github.com/OmBhagat03/ReactApp`}
        className="footer__link"
      >
        GITHUB
      </Link>
    </div>
  );
}

export default Footer;
