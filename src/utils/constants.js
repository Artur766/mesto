export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const cardContainerSelector = ".elements";
export const buttonEdit = document.querySelector(".profile__edit-btn");
export const buttonAdd = document.querySelector(".profile__add-btn");
export const titleInputAddCard = document.querySelector(".popup__input_type_title");
export const linkInputAddCard = document.querySelector(".popup__input_type_link");
export const popupEditProfile = document.querySelector(".popup_type_edit");
export const formEditProfile = popupEditProfile.querySelector(".popup__form");
export const cardContainer = document.querySelector(".elements");
export const popupAddCard = document.querySelector(".popup_type_add");
export const formCreateCard = popupAddCard.querySelector(".popup__form");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const nameInputProfile = document.querySelector(".popup__input_type_name");
export const jobInputProfile = document.querySelector(".popup__input_type_job");
export const popupAvatar = document.querySelector(".popup_type_avatar");
export const formAvatar = popupAvatar.querySelector(".popup__form");
export const linkInputAvatar = formAvatar.querySelector(".popup__input_type_link");
export const buttonChangeAvatar = document.querySelector(".profile__edit-avatar");
export const avatarProfile = document.querySelector(".profile__avatar");
export const apiConfig = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    "authorization": 'f5f41958-0d62-4bdb-b46a-d0e71e230b2c',
    'Content-Type': 'application/json'
  }
}