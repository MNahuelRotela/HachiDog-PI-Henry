import {NavLink} from 'react-router-dom';
import styles from "./German.module.css";
import german from "../../img/germanface.webp";
import germanfull from "../../img/germanfull1.png"
import backto from "../../img/backto.png"
import GermanSlider from "../GermanSlider/GermanSlider";


const GermanSheperd = () => {
    return (
        <div className={styles.generaldiv}>
        <img src={german} alt="german" className={styles.german}/>
        <img src={germanfull} alt="germanfull" className={styles.german2}/>
        <GermanSlider className={styles.sliders}/>
        
        <NavLink to="/dogpack" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the whole pack of dogs again?</h2>
        </div>
    )
}
export default GermanSheperd;