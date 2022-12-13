import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>depass.</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <a
              href="https://dexscreener.com/polygon/0x8bb12292ec2cfc5cf7811457afd383b1d1719502"
              target="blank"
            >
              Investir
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://medium.com/@neel.claudel/depass-r%C3%A9volutionne-la-billetterie-944f64a119dc"
              target="blank"
            >
              Billetterie
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://polygonscan.com/address/0x0fc54445e1187d57b346a81c9b6e974dc810bead"
              target="blank"
            >
              Token
            </a>
          </li>
          <li className="nav-item">
            <a href="/">NFTs</a>
          </li>
          <li className="nav-item">
            <a className="btn" href="/">
              APP
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
