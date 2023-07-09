import React from "react";
import imgNotFound from '../../img/NotFound.jpg'


function Error() {

  return (
    <div>
      <p>Oh no!</p>
      <p>Can't find what you're looking for</p>
      <img src={imgNotFound} alt={imgNotFound} />
    </div>
  );
}

export default Error;