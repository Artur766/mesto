import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { initialCards, validationConfig, cardContainer, buttonEdit, buttonAdd, titleInputAddCard, linkInputAddCard, formEditProfile, formCreateCard, profileName, profileJob, nameInputProfile, jobInputProfile } from "../components/constants.js";
import "./index.css"

const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, "#cards-template", (name, link) => {
      popupImage.open(name, link)
    }
    );
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();

    cards.addItem(cardElement);
  }
},
  cardContainer);

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
const popupWithFormCreateCard = new PopupWithForm(".popup_type_add", () => {

  const cardAdd = new Section({
    items: [{
      name: titleInputAddCard.value,
      link: linkInputAddCard.value
    }],
    renderer: (item) => {
      // Создадим экземпляр карточки 
      const card = new Card(item, "#cards-template", (name, link) => {
        popupImage.open(name, link);
      });
      // Создаём карточку и возвращаем наружу 
      const cardElement = card.generateCard();

      document.querySelector(".elements").prepend(cardElement)
    }
  },
    cardContainer);
  cardAdd.renderItem();
});
popupWithFormCreateCard.setEventListeners();

//форма с профилем
const popupWithFormProfile = new PopupWithForm(".popup_type_edit", () => {
  const dataInput = {
    name: nameInputProfile.value,
    activity: jobInputProfile.value
  }
  userInfo.setUserInfo(dataInput);
});
popupWithFormProfile.setEventListeners();


const userInfo = new UserInfo({ name: profileName, activity: profileJob });
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