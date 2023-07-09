import React from "react";
import style from "./Nav.module.css";
import Hachidog from "../../img/Hachidogtransparent.png"
import wanttoknow from "../../img/wanttoknow.png"
import slogan from "../../img/slogan.png"
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {



  return (
    <div className={style.navBar}>
      <div className={style.content}>
        <img className={style.imglogo} src={Hachidog} alt={Hachidog} />
      </div>
      <Link to="/home" >
          <img src={slogan} alt="slogan" className={style.slogan}/>
      </Link>
      <div>
        <Link to="/create">
          <button className={style.btncreate}>Create dog</button>
        </Link>
      </div>
      <NavLink to= "/dogpack">
      <img className={style.wanttoknow} src={wanttoknow} alt="Want to know ?"/>
      </NavLink>
    </div>
  );
};


export default NavBar;