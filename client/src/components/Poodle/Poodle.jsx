import {NavLink} from 'react-router-dom';
import styles from "./Poodle.module.css";
import poodle from "../../img/poodleface.png";
import poodlefull from "../../img/poodlefull.png"
import backto from "../../img/backto.png"
import PoodleSlider from "../PoodleSlider/PoodleSlider";


const Poodle = () => {
    return (
        <div className={styles.generaldiv}>
        <img src={poodle} alt="poodle" className={styles.poodle}/>
        <img src={poodlefull} alt="poodlefull" className={styles.poodle2}/>
        <PoodleSlider className={styles.sliders}/>
        
        <NavLink to="/dogpack" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the whole pack of dogs again?</h2>
        </div>
    )
}
export default Poodle;