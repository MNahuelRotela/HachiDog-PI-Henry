import React from "react";
import * as actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListsTemperaments from "./ListsTemperaments";
import validate from "./validate";
import Footer from "../Footer/Footer";
import style from "./CreateDog.module.css";

const CreateDog = () => {
  const dispatch = useDispatch();

  const [dog, setDog] = React.useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeMin: "",
    lifeMax: "",
    image: "",
    temperaments: [],
  });

  const [error, setError] = React.useState({ notnull: "" });
  const temperaments = useSelector((state) => state.temperaments);

  React.useEffect(() => {
    dispatch(actions.getTemperaments());
  }, [dispatch]);

  const handleInputChange = function (e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...dog,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectChange = function (e) {
    e.preventDefault();
    let dogAux = dog.temperaments?.find((elem) => elem === e.target.value);
    if (!dogAux) {
      setDog({
        ...dog,
        [e.target.name]: [...dog.temperaments, e.target.value],
      });
    }
    setError(
      validate({
        ...dog,
        [e.target.name]: [...dog.temperaments, e.target.value],
      })
    );
  };

  function onClose(name) {
    let dogTemperamentFilter = dog.temperaments.filter((c) => c !== name);
    setDog({
      ...dog,
      temperaments: [...dogTemperamentFilter],
    });
    setError(
      validate({
        ...dog,
        temperaments: [...dogTemperamentFilter],
      })
    );
  }

  const handleOnSubmit = function (e) {
    e.preventDefault();
    if (!Object.keys(error).length) {
      let arrTemperaments = temperaments.filter((elem) =>
        dog.temperaments.find((prop) => prop === elem.name)
      );
      let dogCreate = {
        name: dog.name,
        temperament: dog.temperaments.join(", "),
        temperaments: arrTemperaments.map((elem) => elem.id),
        height: `${dog.heightMin} - ${dog.heightMax}`,
        weight: `${dog.weightMin} - ${dog.weightMax}`,
        life_span: `${dog.lifeMin} - ${dog.lifeMax} years`,
        image: dog.image,
      };
      dispatch(actions.createDog(dogCreate));

      //luego de creado limpio los campos
      setDog({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeMin: "",
        lifeMax: "",
        image: "",
        temperaments: [],
      });
      alert("Dog Created");
    } else {
      console.log("faltan datos");
    }
  };

  return (
    <div className={style.generaldiv}>
      <Link to="/dogs">
        <button className={style.btnBack}>Back</button>
      </Link>
      <div className={style.contentCreate}>
        <div className={style.cardContentC}>
          <div className={style.title}>
            <h1 className={style.texto}>Created your dog</h1>
          </div>
          <form onSubmit={handleOnSubmit}>
            <ul className={style.ulCreated}>
              <div className={style.divLabel}>
                <label classname={style.label}>Name: </label>
              </div>
              <li>
                <input
                  placeholder="Dog name"
                  name="name"
                  type="text"
                  value={dog.name}
                  onChange={handleInputChange}
                ></input>
                {error.name && <p className={style.err}>{error.name}</p>}
              </li>
              <div className={style.divLabel}>
                <label classname={style.label}>Height: </label>
              </div>
              <li className={style.list}>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="heightMin"
                    placeholder="Min cm"
                    value={dog.heightMin}
                    onChange={handleInputChange}
                  ></input>
                  {error.heightMin && <p className={style.err}>{error.heightMin}</p>}
                </div>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="heightMax"
                    placeholder="Max cm"
                    value={dog.heightMax}
                    onChange={handleInputChange}
                  ></input>
                  {error.heightMax && <p className={style.err}>{error.heightMax}</p>}
                </div>
              </li>
              <div className={style.divLabel}>
                <label classname={style.label}>Weight: </label>
              </div>
              <li className={style.list}>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="weightMin"
                    placeholder="Min Kg"
                    value={dog.weightMin}
                    onChange={handleInputChange}
                  ></input>
                  {error.weightMin && <p className={style.err}>{error.weightMin}</p>}
                </div>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="weightMax"
                    placeholder="Max Kg"
                    value={dog.weightMax}
                    onChange={handleInputChange}
                  ></input>
                  {error.weightMax && <p className={style.err}>{error.weightMax}</p>}
                </div>
              </li>
              <div className={style.divLabel}>
                <label classname={style.label}>Life span: </label>
              </div>
              <li className={style.list}>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="lifeMin"
                    placeholder="Min"
                    value={dog.lifeMin}
                    onChange={handleInputChange}
                  ></input>
                  {error.lifeMin && <p className={style.err}>{error.lifeMin}</p>}
                </div>
                <div className={style.divSimul}>
                  <input
                    type="number"
                    min="1"
                    name="lifeMax"
                    placeholder="Max"
                    value={dog.lifeMax}
                    onChange={handleInputChange}
                  ></input>
                  {error.lifeMax && <p className={style.err}>{error.lifeMax}</p>}
                </div>
              </li>
              <div className={style.divLabel}>
                <label classname={style.label}>Image: </label>
              </div>
              <li className={style.list}>
                <input
                  name="image"
                  type="text"
                  placeholder="Image URL"
                  value={dog.image}
                  onChange={handleInputChange}
                ></input>
              </li>
              <li>
                {dog.image ? (
                  <img className={style.imgPrev} src={dog.image} alt={dog.image} />
                ) : null}
              </li>
              <li>
                <div>
                  <div>
                    <div className={style.divLabel}>
                      <label classname={style.label}>temperaments: </label>
                    </div>
                    <select
                      className={style.selectStyleCreate}
                      onChange={(e) => handleSelectChange(e)}
                      required=""
                      name="temperaments"
                    >
                      <option value="">Select temperaments</option>
                      {temperaments?.map((elem) => (
                        <option
                          name="temperament"
                          value={elem.name}
                          key={elem.id}
                        >
                          {elem.name}
                        </option>
                      ))}
                    </select>
                    {error.temperaments && (
                      <p className={style.err}>{error.temperaments}</p>
                    )}
                  </div>
                  <ul className={style.selectedTemp}>
                    {dog.temperaments
                      ? dog.temperaments.map((elem) => (
                          <ListsTemperaments
                            key={elem}
                            name={elem}
                            onClose={onClose}
                          />
                        ))
                      : ""}
                  </ul>
                </div>
              </li>
              <button type="submit" disabled={Object.keys(error).length}>
                Create Dog
              </button>
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateDog;