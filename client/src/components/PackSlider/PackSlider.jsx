import {NavLink} from 'react-router-dom';
import styles from "./PackSlider.module.css";
import german from "../../img/germanpack.png";
import poodle from "../../img/poodlepack.png";
import hachiko from "../../img/hachikopack.png";
import saintbernard from "../../img/sbpack.png";
import dogo from "../../img/dogopack.png";

const PackSlider = () => {
    return (
        <div className={styles.divgeneral}>
            <section className={styles.section}>
                <NavLink to="/german" className={styles.Nav}>
                <img src={german} alt="german" className={styles.DogImg} />
                </NavLink>

                <NavLink to="/poodle" className={styles.Nav}>
                <img src={poodle} alt="poodle" className={styles.DogImg} />   
                </NavLink>

                <NavLink to="/hachiko" className={styles.Nav}>
                <img src={hachiko} alt="hachiko" className={styles.DogImg} />    
                </NavLink>

                <NavLink to="/saintbernard" className={styles.Nav}>
                <img src={saintbernard} alt="saintbernard" className={styles.DogImg} />   
                </NavLink>

                <NavLink to="/dogo" className={styles.Nav}>
                <img src={dogo} alt="dogo"  className={styles.DogImg} />
                </NavLink>
                
                
                
                
                
            </section>

        </div>
    )
}
export default PackSlider;