import {NavLink} from 'react-router-dom';
import styles from "./ArgentinianDogo.module.css"
import dogo from "../../img/dogo.png"
import backto from "../../img/backto.png"
import DogoSlider from "../DogoSlider/DogoSlider"

const ArgentinianDogo = () => {
    return (
        <div className={styles.generaldiv}>
        <img src={dogo} alt="argentiniandogo" className={styles.dogo}/>
        <DogoSlider className={styles.sliders}/>
        
        <NavLink to="/dogpack" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the whole pack of dogs again?</h2>
        </div>
    )
}
export default ArgentinianDogo;