import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./constants.js";
import { openPopup, closePopup } from "./utils.js";

const buttonEdit = document.querySelector(".profile__edit-btn");
const popupEditProfile = document.querySelector(".popup_type_edit");
const buttonClosePopupEditProfile = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formEditProfile = popupEditProfile.querySelector(".popup__form");
const nameInputProfile = document.querySelector(".popup__input_type_name");
const jobInputProfile = document.querySelector(".popup__input_type_job");
const cardContainer = document.querySelector(".elements");
const titleInputAddCard = document.querySelector(".popup__input_type_title");
const linkInputAddCard = document.querySelector(".popup__input_type_link");
const popupAddCard = document.querySelector(".popup_type_add");
const popupAddClose = popupAddCard.querySelector(".popup__close-btn");
const formCreateCard = popupAddCard.querySelector(".popup__form");
const buttonAdd = document.querySelector(".profile__add-btn");

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Присваивание значений инпутов к текстовым значениям профайла
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInputProfile.value;
  profileJob.textContent = jobInputProfile.value;
  closePopup(popupEditProfile);
}

//функция создание карточки 
function createCard(item) {
  // Создадим экземпляр карточки
  const card = new Card(item, "#cards-template");

  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  return cardElement;
}

//динамически добавляем карточки из объекта 
initialCards.forEach((item) => {
  // Добавляем в DOM
  cardContainer.append(createCard(item));
})

//функиця создание новой карточки
function submitAddCardForm(evt) {
  evt.preventDefault();

  const cardDate = {
    name: titleInputAddCard.value,
    link: linkInputAddCard.value,
  };

  cardContainer.prepend(createCard(cardDate));

  closePopup(popupAddCard);
  //обнуляем значения после добавление картинки 
  titleInputAddCard.value = '';
  linkInputAddCard.value = '';
}

//валидация формы добавление карточке
const formAddCardValidate = new FormValidator(validationConfig, formCreateCard);
formAddCardValidate.enableValidation();

//валидация формы профиля
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidate.enableValidation();

//открытие попапа профиль 
buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  //присваиваем значение из профиля в инпуты
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileJob.textContent;

  formEditProfileValidate.disabledSubmitButton();
});

//закрываем попап профиля на крестик
buttonClosePopupEditProfile.addEventListener("click", () => closePopup(popupEditProfile)
);

//сабмитим попап с профилем
formEditProfile.addEventListener("submit", submitEditProfileForm);

//открытие попапа с добавлением карточек 
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddCard);

  //блокируем кнопку созадть при открытии попапа 
  formAddCardValidate.disabledSubmitButton();
  //очищаем поля 
  formAddCardValidate.resetInput();
});

//закрытие попапа с добавлением карточек на крестик
popupAddClose.addEventListener("click", () => closePopup(popupAddCard));

//закрываем попап на кнопку создать
formCreateCard.addEventListener("submit", submitAddCardForm);