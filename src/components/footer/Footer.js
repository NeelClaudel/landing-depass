import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h4>DePass</h4>
          <p>App</p>
          <p>Exploreur</p>
        </div>
        <div className="col">
          <h4>Developers</h4>
          <p>API</p>
          <p>Documentation</p>
        </div>
        <div className="col">
          <h4>Governance</h4>
          <p>Token</p>
          <p>Charts</p>
        </div>
        <div className="col">
          <h4>Communauté</h4>
          <p>Discord</p>
          <p>Twitter</p>
          <p>Telegram</p>
          <p>Medium</p>
        </div>
        <div className="col">
          <h4>A Propos</h4>
          <p>FAQ</p>
          <p>Documentation</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
