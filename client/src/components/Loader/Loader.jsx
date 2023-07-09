import React from "react";
import styles from "./Loader.module.css"
import loading from "../../img/Loading.gif"

const Loader = () => {
  return (
    <div className={styles.generaldiv}>
      <img src={loading} alt={loading} className={styles.img}/>
    </div>
  );
};

export default Loader;