import React from "react";
import style from "./CreateDog.module.css";


const ListsTemperaments = (props) => {


  return (
    <li>
      <button
        className={style.btnSelecTemp}
        type="button"
        value={props.name}
        onClick={(e) => {
          e.preventDefault();
          props.onClose(props.name);
        }}
      >
        {props.name}
      </button>
    </li>
  );
};

export default ListsTemperaments;