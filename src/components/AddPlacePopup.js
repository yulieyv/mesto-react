import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    if (props.isOpen) {
      setName("");
      setLink("");
    }
  }, [props.isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });
  }
  return (
    <PopupWithForm
      title={"Новое место"}
      name={"new-place"}
      buttonText={"Создать"}
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        value={name || ""}
        onChange={handleNameChange}
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
        value={link || ""}
        onChange={handleLinkChange}
      />
      <span className="linkCard-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
