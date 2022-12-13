import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>Protocole de Billetterie Utilisant la technologie blockchain</h2>
        <p>
          Les solutions blockchain de billetteries offrent une option fiable et
          sûre pour la vente et l'échange de billets d'événements. Avec la
          technologie blockchain, les transactions sont enregistrées sur une
          base de données distribuée, ce qui signifie qu'elles ne peuvent pas
          être facilement modifiées ou supprimées. Cela permet aux organisateurs
          et aux participants de bénéficier d'une plus grande sécurité et de
          transparence et d'être sûrs que les billets d'événement sont
          authentiques et non contrefaits. Les solutions blockchain offrent
          également un moyen plus sûr et plus facile de transférer le titre de
          propriété des billets entre les propriétaires, ce qui peut être très
          utile pour les participants à des événements qui ont besoin de vendre
          leurs billets. Enfin, les solutions blockchain peuvent également aider
          à réduire le prix des billets et à réduire les frais pour les
          organisateurs.
        </p>
        <br />
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="Preuve d'authenticitée Numérique"
              text="les billetteries NFTs ouvrent la voie à une nouvelle ère de commerce de billets entièrement numérique, sécurisé et transparent. Cette technologie innovante permet aux organisateurs d'événements et aux consommateurs de profiter d'une expérience de billetterie plus sûre et plus efficace."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="La Blockchain"
              text="Les blockchains peuvent être utilisées pour une variété de fins, notamment la gestion des identités, l'accès aux données, et l'enregistrement des transactions. Les blockchains peuvent également être utilisées pour créer des systèmes plus efficaces et sécurisés."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiFsecure className="icon" />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<VscServerProcess className="icon" />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
        <a href="/" className="btn">
          Use Defi
        </a>
      </div>
    </div>
  );
};

export default About;
