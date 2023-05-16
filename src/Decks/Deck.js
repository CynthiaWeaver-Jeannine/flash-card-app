import React from "react";
import {
  useHistory,
  NavLink,
} from "react-router-dom";
import { deleteDeck } from "../utils/api";

//the deck screen displays the information about a deck
function Deck({ data, buildDeckList }) {
  const history = useHistory();

  function handleDeleteDeck(event) {
    event.preventDefault();
    let result = window.confirm("Delete Deck?");
    if (result) {
      deleteDeck(data.id).then((res) => {
        buildDeckList();
        history.push(`/`);
      });
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{data.name} </h3>
        <h3 className="card-title">{data.cards.length} cards</h3>
      </div>

      <div>
        <h5 className="card-title">{data.description}</h5>
      </div>

      <div>
        <NavLink to={`decks/${data.id}`}>
          <button className="card-text">View</button>
        </NavLink>
        <NavLink to={`decks/${data.id}/study`}>
          <button>Study</button>
        </NavLink>
        <button className="card-text" onClick={handleDeleteDeck}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Deck;