import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title={"Редактировать профиль"}
        name={"profile"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_name"
          id="name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-error popup__input-error"></span>
        <input
          className="popup__input popup__input_job"
          id="job"
          type="text"
          name="job"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="job-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"new-place"}
        buttonText={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_image_name"
          id="nameCard"
          type="text"
          name="nameCard"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="nameCard-error popup__input-error"></span>
        <input
          className="popup__input popup__input_image_link"
          id="linkCard"
          type="url"
          name="linkCard"
          placeholder="Cсылка на картинку"
          required
          pattern="https://.+"
        />
        <span className="linkCard-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title={"Вы уверены?"}
        name={"delete"}
        buttonText={"Да"}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithForm
        title={"Обновить аватар"}
        name={"avatar"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_avatar"
          id="avatar"
          type="url"
          name="url"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error avatar-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
