import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Protocol de</h1>
        <h1>
          <span className="blue">Billetterie </span>Decentralisé
        </h1>
        <p>
          Une solution NFT, jeton non fongible, pour les billetteries permet de
          créer des billets numériques uniques et vérifiables qui ne peuvent pas
          être dupliqués ni contrefaits. Cela pourrait potentiellement aider à
          réduire la fraude et à augmenter la sécurité dans l'industrie des
          billets. Les NFT utilisent la technologie blockchain pour créer des
          actifs numériques uniques qui sont stockés sur un registre distribué,
          offrant un enregistrement permanent et transparent de la propriété.
          Cela peut être particulièrement utile dans le domaine des
          billetteries, où il est souvent nécessaire de vérifier l'authenticité
          des billets.
        </p>
        <div className="btn-group">
          <button className="btn" href="#">
            Application
          </button>
          <button className="btn btn-outline">
            {" "}
            <a
              href="https://medium.com/@neel.claudel/depass-r%C3%A9volutionne-la-billetterie-944f64a119dc"
              target="blank"
            >
              Documentation
            </a>
          </button>
          <button className="btn btn-outline" href="">
            <a
              href="https://dexscreener.com/polygon/0x8bb12292ec2cfc5cf7811457afd383b1d1719502"
              target="blank"
            >
              Investir
            </a>
          </button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>
          Token :{" "}
          <a
            href="https://polygonscan.com/address/0x0fc54445e1187d57b346a81c9b6e974dc810bead"
            target="blank"
          >
            <span className="blue">
              0x0fC54445E1187D57B346a81C9b6e974Dc810BeAD
            </span>
          </a>
        </h2>
      </div>
    </div>
  );
};

export default hero;
