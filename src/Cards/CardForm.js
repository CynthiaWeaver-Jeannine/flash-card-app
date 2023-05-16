import React from "react";
import {Link} from "react-router-dom"

//Button behavior: on EditCard, if the user clicks on either Save or Cancel, the user is taken to the Deck screen. 
//on AddCard, if he user clicks Save, a new card is created and associated with the relevant deck. If the user clicks Done, the user is taken to the Deck screen.
function CardForm({ formData, handleSubmit, handleInputChange }) {
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="front"></label>
        Front
        <textarea
          type="text"
          name="front"
          id="front"
          value={formData.front}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="back"></label>
        Back
        <textarea
          type="text"
          name="back"
          id="back"
          value={formData.back}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <Link to={"/"}><button>Cancel/Done</button></Link>
      <button type="submit">Save</button>
    </form>
  );
}

export default CardForm;