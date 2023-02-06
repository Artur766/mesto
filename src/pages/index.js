import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { initialCards, validationConfig, buttonEdit, buttonAdd, titleInputAddCard, linkInputAddCard, formEditProfile, formCreateCard, profileName, profileJob, nameInputProfile, jobInputProfile, cardContainerSelector } from "../utils/constants.js";
import "./index.css"

function createCard(item) {
  // Создадим экземпляр карточки
  const card = new Card(item, "#cards-template", (name, link) => {
    popupImage.open(name, link)
  }
  );
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  return cardElement
}

const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cards.addItem(cardElement);
  }
},
  cardContainerSelector);

//динамическое добавление карточек
cards.renderItem();


//валидация формы добавление карточке
const formAddCardValidate = new FormValidator(validationConfig, formCreateCard);
formAddCardValidate.enableValidation();

//валидация формы профиля
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidate.enableValidation();

const popupImage = new PopupWithImage(".popup_type_increase");
popupImage.setEventListeners();

// форма с созданием карточки
const popupWithFormCreateCard = new PopupWithForm(".popup_type_add", (obj) => {

  const cardElement = createCard({
    name: obj[titleInputAddCard.name],
    link: obj[linkInputAddCard.name]
  });

  cards.addItem(cardElement);
});
popupWithFormCreateCard.setEventListeners();

//форма с профилем
const popupWithFormProfile = new PopupWithForm(".popup_type_edit", (obj) => {

  userInfo.setUserInfo({
    name: obj[nameInputProfile.name],
    activity: obj[jobInputProfile.name]
  });

});
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo({
  name: profileName,
  activity: profileJob
});
//открытие попапа профиль 
buttonEdit.addEventListener("click", () => {
  popupWithFormProfile.open();
  //присваиваем значение из профиля в инпуты
  const userData = userInfo.getUserInfo();
  nameInputProfile.value = userData.name;
  jobInputProfile.value = userData.activity;

  formEditProfileValidate.disabledSubmitButton();
});


//открытие попапа с добавлением карточек 
buttonAdd.addEventListener("click", () => {
  popupWithFormCreateCard.open();

  //блокируем кнопку созадть при открытии попапа 
  formAddCardValidate.disabledSubmitButton();
  //очищаем поля 
  formAddCardValidate.resetInput();
});