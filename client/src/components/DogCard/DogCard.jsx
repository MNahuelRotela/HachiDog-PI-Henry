import React from "react";
import { Link } from "react-router-dom";
import style from "./DogCard.module.css";

const DogCard = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/dogs/${props.id}`} className={style.link}>
        <div className={style.dogCard}>
          <img src={props.img} alt={props.img} className={style.dogImg} />{" "}
        </div>
        <div className={style.carddetails}>
          <p className={style.texttitle}>{props.name}</p>

          <p className={style.textbody}>Temperaments: {props.temperament}</p>
          <p className={style.textbody}>{props.weight} kg</p>
        </div>

        <button className={style.cardbutton}>MORE INFO</button>
      </Link>
    </div>
  );
};

export default DogCard;