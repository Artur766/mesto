import Section from "../components/Section.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmation from "../components/PopupConfirmation.js";
import Api from "../components/Api.js";
import { validationConfig, buttonEdit, buttonAdd, titleInputAddCard, linkInputAddCard, formEditProfile, formCreateCard, profileName, profileJob, nameInputProfile, jobInputProfile, cardContainerSelector, formAvatar, linkInputAvatar, buttonChangeAvatar, avatarProfile, apiConfig } from "../utils/constants.js";
import "./index.css"

const api = new Api(apiConfig);

const userInfo = new UserInfo({
  name: profileName,
  activity: profileJob,
  avatar: avatarProfile,
});

let currentUserId = undefined;

// Создаём массив с промисами
const promises = [api.getInitialCards(), api.getUserInformation()];

// Передаём массив с промисами методу Promise.all
Promise.all(promises)
  .then((data) => {
    //получаем данные о пользователе(аватар, имя,работа)
    userInfo.setUserInfo(data[1]);
    //получаем текущий айди пользователя
    currentUserId = data[1]._id;
    //рендерим массив карточек
    cards.renderItem(data[0]);
  });

function createCard(dataCard) {
  // Создадим экземпляр карточки
  const card = new Card(dataCard, "#cards-template", currentUserId, dataCard._id, (name, link) => {
    popupImage.open(name, link)
  }, () => {
    popupConfirmation.open();//открываем попап с удалением карточки 

    popupConfirmation.handleFormConfirmation(() => {//вызываем метод у попапа подтверждения в которой передаем функцию для удаления карточки 

      api.deleteCard(dataCard._id)
        .then(() => {
          card.removeCard();
          popupConfirmation.close();
        })
        .catch((err) => {
          console.log(err);
        });
    })
  }, () => {//запрос для обновления количества лайков
    api.putLike(dataCard._id)
      .then((data) => {
        card.changingNumberLikes(data)
      })
  }, () => {//запрос для удаления количества лайка
    api.removeLike(dataCard._id)
      .then((data) => {
        card.changingNumberLikes(data);
      })
  }
  );
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  return cardElement
}

const cards = new Section((item) => {
  return createCard(item);
}, cardContainerSelector);

const popupImage = new PopupWithImage(".popup_type_increase");
popupImage.setEventListeners();

// попап с созданием карточки
const popupWithFormCreateCard = new PopupWithForm(".popup_type_add", (dataInput) => {

  popupWithFormCreateCard.renderLoading(true);

  api.createCard({
    name: dataInput[titleInputAddCard.name],
    link: dataInput[linkInputAddCard.name]
  })
    .then((dataCard) => {
      cards.addItem(dataCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormCreateCard.renderLoading(false, "Создать");
    });
});
popupWithFormCreateCard.setEventListeners();


//попап с профилем
const popupWithFormProfile = new PopupWithForm(".popup_type_edit", (dataInput) => {

  popupWithFormProfile.renderLoading(true);
  // обновляем данные о пользователе 
  api.updatingUserData({
    name: dataInput[nameInputProfile.name],
    about: dataInput[jobInputProfile.name]
  })
    .then((dataUser) => {
      userInfo.setUserInfo(dataUser);

    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormProfile.renderLoading(false, "Сохранить");
    })

});
popupWithFormProfile.setEventListeners();

//попап с аватаром
const popupWithFormAvatar = new PopupWithForm(".popup_type_avatar", (dataInput) => {

  popupWithFormAvatar.renderLoading(true);

  api.changeAvatar({
    avatar: dataInput[linkInputAvatar.name]
  })
    .then((dataLinkAvatar) => {
      userInfo.setUserInfo(dataLinkAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAvatar.renderLoading(false, "Сохранить");
    })
});
popupWithFormAvatar.setEventListeners();

// попап с подтверждением удаления 
const popupConfirmation = new PopupConfirmation(".popup_type_confirmation");
popupConfirmation.setEventListeners();

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

//открытие попапа с редактированием профиля
buttonChangeAvatar.addEventListener("click", () => {
  popupWithFormAvatar.open();

  //блокируем кнопку созадть при открытии попапа и очищаем поля
  formAvatarValidate.disabledSubmitButton();
  formAvatarValidate.resetInput();
})

//валидация формы добавление карточке
const formAddCardValidate = new FormValidator(validationConfig, formCreateCard);
formAddCardValidate.enableValidation();

//валидация формы профиля
const formEditProfileValidate = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidate.enableValidation();

//валидация формы аватара
const formAvatarValidate = new FormValidator(validationConfig, formAvatar);
formAvatarValidate.enableValidation();


