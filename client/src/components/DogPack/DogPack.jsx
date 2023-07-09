import {NavLink} from 'react-router-dom';
import styles from "./DogPack.module.css";
import PackSlider from '../PackSlider/PackSlider';
import backto from "../../img/backto.png"



const DogPack = () => {
    return (
        <div className={styles.generaldiv}>
            <PackSlider className={styles.slider}/>
            <NavLink to="/dogs" className={styles.backto}>
                <img src={backto} alt="backtohome" className={styles.backtoimg} />
            </NavLink>
            <h2 className={styles.backtext}>Do you want to see <br/>
            the others again?</h2>
        </div>
    )
}
export default DogPack;