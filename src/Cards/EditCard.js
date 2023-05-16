import React, { useState, useEffect } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import CardForm from "./CardForm";
import { readCard, readDeck, updateCard } from "../utils/api";
//allows users to modify information on an existing card
function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();

  const [deck, setDeck] = useState({});
  let initialFormData = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    readDeck(deckId).then((res) => {
      setDeck(res);
      readCard(cardId).then((res) => {
        setFormData(res);
      });
    });
  }, [deckId,cardId]);

  function handleInputChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateCard(formData).then(() => {
      history.push(`/decks/${deckId}`);
    });
  }

  return (
    <React.Fragment>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck && deck.name}</Link>
            </li>
            <li className="breadcrumb-item active">Add Card</li>
          </ol>
        </nav>
      </div>

      <h1>Edit Card</h1>

      <CardForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </React.Fragment>
  );
}

export default EditCard;