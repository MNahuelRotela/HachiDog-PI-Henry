import React from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import axios from "axios";
import style from "./DogDetail.module.css";

const DogDetails = () => {
  const id = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getDogDetail(id.id));
  }, [id, dispatch]);

  const deleteDog = async () => await axios.delete("/dogs/" +id);

  const dogDetail = useSelector((state) => state.dogDetail);

  //Mientras espera la info de useSelector muestra el Loader

  return (
    <div className={style.generaldiv}>
      {!Object.keys(dogDetail).length ? (
        <div className={style.contLoader}>
          <div>
            <Loader className={style.Loader} />
          </div>
          <Footer />
        </div>
      ) : dogDetail.hasOwnProperty("error") ? (
        <div>
          <Link to="/dogs">
            <button className={style.btnBackDetails}>back</button>
          </Link>
          <Error />
        </div>
      ) : (
        <div>
          <div>
            <Link to="/dogs">
              <button className={style.btnBackDetails}>back</button>
            </Link>

            <div className={style.cardContent}>
              <div className={style.title}>
                <h1 className={style.texto}>{dogDetail.name}</h1>
                {dogDetail.bdd ? (
                  <a className={style.buttonDelete} href="#popup1">
                    Delete
                  </a>
                ) : null}
              </div>
              <div className={style.contentDetails}>
                <div className={style.contIzqDetails}>
                  <img
                    className={style.imgContainer}
                    src={
                      dogDetail.image?.hasOwnProperty("url")
                        ? dogDetail.image.url
                        : dogDetail.image
                    }
                    alt={
                      dogDetail.image?.hasOwnProperty("url")
                        ? dogDetail.image.url
                        : dogDetail.image
                    }
                  />
                </div>
                <div className={style.contDerDetails}>
                  <p className={style.pDetails}>
                    {dogDetail.temperament
                      ? `Temperament: ${dogDetail.temperament}`
                      : ""}
                  </p>
                  <p className={style.pDetails}>
                    {dogDetail.origin ? `Origin: ${dogDetail.origin}` : ""}
                  </p>
                  <p className={style.pDetails}>
                    {dogDetail.weight?.hasOwnProperty("metric")
                      ? `Weight: ${dogDetail.weight.metric}`
                      : `Weight: ${dogDetail.weight}`}
                    cm
                  </p>
                  <p className={style.pDetails}>
                    {dogDetail.height?.hasOwnProperty("metric")
                      ? `Height: ${dogDetail.height.metric}`
                      : `Height: ${dogDetail.height}`}
                    kg
                  </p>
                  <p className={style.pDetails}>
                    {dogDetail.life_span
                      ? `Life span: ${dogDetail.life_span}`
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
      <div id="popup1" className={style.overlay}>
        <div className={style.popup}>
          <h2>Are you sure you want to remove {dogDetail.name}</h2>
          <a className={style.close} href={"*"}>
            &times;
          </a>
          <div className={style.contentPop}>
            <Link to="/dogs">
              <button onClick={deleteDog}>Accept</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;