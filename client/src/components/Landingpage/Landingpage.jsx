
import React from "react";
import * as actions from "../../redux/actions/actions"
import { useDispatch } from "react-redux";
import {NavLink } from "react-router-dom";
import styles from "./Landingpage.module.css";
import logo from "../../img/Hachidogtransparent.png"
import slogan from "../../img/slogan.png"

const Landingpage = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(actions.getAllDogsHome());
    }, [dispatch]);

    return (
        <div className={styles.generaldiv}>
            <img className={styles.logo}src={logo} alt="logo" />
            <img className={styles.slogan}src={slogan} alt="slogan" />
            <div className={styles.mountain}></div>
            <div className={styles.place}></div>
            <div className={styles.dirt}></div>
            <div className={styles.dogs}></div>
            <nav className={styles.nav}>
            <NavLink to="/dogs">
                <button className={styles.button}>Let him find you!</button>
            </NavLink>
            </nav>
            
        </div>
    )
}
export default Landingpage;