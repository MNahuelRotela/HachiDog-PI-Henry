import {NavLink} from 'react-router-dom';
import styles from "./SaintBernard.module.css";
import saintbernard from "../../img/saintbernardface.png";
import saintbernardfull from "../../img/saintbernardfull.png"
import backto from "../../img/backto.png"
import SaintBernardSlider from "../SaintBernardSlider/SaintBernardSlider";


const SaintBernard = () => {
    return (
        <div className={styles.generaldiv}>
        <img src={saintbernard} alt="saintbernard" className={styles.saintbernard}/>
        <img src={saintbernardfull} alt="saintbernardfull" className={styles.saintbernard2}/>
        <SaintBernardSlider className={styles.sliders}/>
        
        <NavLink to="/dogpack" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the whole pack of dogs again?</h2>
        </div>
    )
}
export default SaintBernard;