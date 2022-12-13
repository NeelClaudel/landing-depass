import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Recevoir des nouvelles du développement</h2>
        <form
          action="https://getform.io/f/fd9942be-e037-443e-bb46-023d1afc80b6"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Entrer votre email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Oui, je suis d'accord de recevoir des nouvelles de DePass</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
