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
            <a href="/">Investir</a>
          </li>
          <li className="nav-item">
            <a href="/">Billetterie</a>
          </li>
          <li className="nav-item">
            <a href="/">Blockchain</a>
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
