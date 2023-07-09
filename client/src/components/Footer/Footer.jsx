import React from "react";
import style from "./Footer.module.css";
import gitImg from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.credits}>
        <ul>
          <li>
            <a className={style.osc} href="https://www.instagram.com/nahuelr4/">
              Nahuel Rotela, 2023
            </a>
          </li>
          <li>
            <ul></ul>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nahuel-matias-rotela-b0043a268/">
              <img width="30" height="30" src={linkedin} alt="linkedin" className={style.linkedin}/>
            </a>
          </li>
          <li>
            <ul></ul>
          </li>
          <li>
            <a href="https://github.com/MNahuelRotela">
              <img width="30" height="30" src={gitImg} alt="github" className={style.github} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;