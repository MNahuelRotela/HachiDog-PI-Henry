import React from 'react';
import './Paginate.css'

const Paginado = ({
  dogsPerPage,
  dogs,
  paginate,
  currentPage,
  handleNext,
  handlePrev,
  currentDogs,
}) => {
  const pageNumbers = [];

  //convertimos el numero en un array con numeros para renderizar el paginado. ejem 3 => [1, 2, 3]
  for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <button onClick={(e) => handlePrev(e)} disabled={currentPage <= 1}>
          {"<"}
        </button>
        {pageNumbers?.map((number) => (
          <button
            onClick={() => paginate(number)}
            className={
              Number(number) === Number(currentPage)
                ? "btnactivate"
                : "btndesactivate"
            }
          >
            {number}
          </button>
        ))}
        <button
          onClick={(e) => handleNext(e)}
          disabled={currentDogs?.length < 8}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Paginado;