import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div id="card" className="card">
      <li className="element">
        <img
          src={card.link}
          alt={card.name}
          onClick={() => handleClick(card)}
          className="element__image"
        />
        <div className="element__sign">
          <h2 className="element__title">{card.name}</h2>
          <button
            className="element__delete-button"
            type="button"
            aria-label="Удалить карточку"
          ></button>
          <div className="element__like-list">
            <button
              className="element__like-button"
              type="button"
              title="Поставить лайк"
            ></button>
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
