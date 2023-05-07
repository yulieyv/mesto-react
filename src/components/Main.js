import React, { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cards]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img src={userAvatar} alt="Фото профиля" className="profile__image" />
          <button
            className="profile__avatar-button"
            type="button"
            title="Обновить аватар"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              title="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          title="Добавить карточку"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
