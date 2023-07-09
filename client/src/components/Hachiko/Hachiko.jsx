import {NavLink} from 'react-router-dom';
import styles from "./Hachiko.module.css"
import hachiko from "../../img/hachikohd.png"
import backto from "../../img/backto.png"
import HachikoSlider from "../HachikoSlider/HachikoSlider";


const Hachiko = () => {
    return (
        <div className={styles.generaldiv}>
        <img src={hachiko} alt="hachiko" className={styles.hachiko}/>
        <HachikoSlider className={styles.sliders}/>
        
        <NavLink to="/dogpack" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the whole pack of dogs again?</h2>
        </div>
    )
}
export default Hachiko;