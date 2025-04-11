import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; {currentYear}, Cryptoplace - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
