export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const cardContainer = ".elements";
export const buttonEdit = document.querySelector(".profile__edit-btn");
export const buttonAdd = document.querySelector(".profile__add-btn");
export const titleInputAddCard = document.querySelector(".popup__input_type_title");
export const linkInputAddCard = document.querySelector(".popup__input_type_link");
export const popupEditProfile = document.querySelector(".popup_type_edit");
export const formEditProfile = popupEditProfile.querySelector(".popup__form");
export const cardElement = document.querySelector(".elements");
export const popupAddCard = document.querySelector(".popup_type_add");
export const formCreateCard = popupAddCard.querySelector(".popup__form");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const nameInputProfile = document.querySelector(".popup__input_type_name");
export const jobInputProfile = document.querySelector(".popup__input_type_job");