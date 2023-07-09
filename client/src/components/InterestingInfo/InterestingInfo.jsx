import {NavLink} from 'react-router-dom';
import styles from "./InterestingInfo.module.css"

const InterestingInfo = () => {
    return (
        <div>
            <nav>
            <NavLink to="/akita" className={styles.imgdog}>
            <img src=''></img>
            </NavLink>

            <NavLink to="/akita" className={styles.imgdog}>
            
            </NavLink>

            <NavLink to="/akita" className={styles.imgdog}>
            
            </NavLink>

            <NavLink to="/akita" className={styles.imgdog}>
            
            </NavLink>

            <NavLink to="/akita" className={styles.imgdog}>
            
            </NavLink>
            </nav>
        </div>
    )
}
export default InterestingInfo;