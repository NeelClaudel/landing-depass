import React from "react";
import "./Developer.css";
import Terminal from "../../assets/Terminal.png";

const Developer = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2>Un système billetterie sécurisé</h2>
          <p>
            La <span className="blue">sécurité blockchain</span> est une
            <span className="blue"> technologie innovante</span> qui offre une
            méthode innovante et sécurisée pour transférer des informations et
            des actifs numériques d'un point à un autre. La technologie
            blockchain se compose d'un registre distribué partagé qui contient
            des <span className="blue"> données cryptées</span> chiffrées et des
            "blocs" de données qui sont liés les uns aux autres. En raison de sa
            structure <span className="blue"> decentralisée</span>, le
            blockchain peut offrir un niveau de sécurité et de confidentialité
            qui surpassent les systèmes traditionnels basés sur des serveurs
            centraux. Les transactions exécutées sur la blockchain sont
            <span className="blue">extrêmment difficiles à contrefaire</span> ou
            à modifier, et elles sont enregistrées de manière permanente et
            transparente sur le registre distribué. La sécurité blockchain est
            généralement considérée comme extrêmement fiable et est utilisée
            pour une variété d'applications, notamment le commerce électronique,
            le transfert de fonds, l'authentification et la gestion des actifs
            numériques.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
