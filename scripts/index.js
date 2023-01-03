const buttonEdit = document.querySelector(".profile__edit-btn");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popups = document.querySelectorAll(".popup");
const buttonClosePopupEditProfile = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formEditProfile = document.querySelector(".popup__form");
const nameInputProfile = document.querySelector(".popup__input_type_name");
const jobInputProfile = document.querySelector(".popup__input_type_job");
const cardContainer = document.querySelector(".elements");
const template = document.querySelector("#cards-template");
const titleInputAddCard = document.querySelector(".popup__input_type_title");
const linkInputAddCard = document.querySelector(".popup__input_type_link");
const card = template.content.querySelector(".element");
const popupAddCard = document.querySelector(".popup_type_add");
const popupAddClose = popupAddCard.querySelector(".popup__close-btn");
const formCreateCard = popupAddCard.querySelector(".popup__form");
const buttonAdd = document.querySelector(".profile__add-btn");
const popupIncreaseCard = document.querySelector(".popup_type_increase");
const imagePopupIncrease = document.querySelector(".popup__image");
const descriptionPopupIncrease = document.querySelector(".popup__description");
const popupIncreaseClose = popupIncreaseCard.querySelector(".popup__close-btn")
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const form = document.querySelector(".popup__form");
const userNameInput = document.querySelector("#user-name");
const jobInput = document.querySelector("#job");
const titlePictureInput = document.querySelector("#title-picture");
const linkPictureInput = document.querySelector("#link-picture");

//Открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  //Навешиваем слушатель на кнопку esc
  document.addEventListener("keydown", closePopupEscape);
}

//Закрытие попапа
function removePopup(popup) {
  popup.classList.remove("popup_opened");
  //удаляем слушатель на кнопку esc
  document.removeEventListener("keydown", closePopupEscape);
}

//Присваивание значений инпутов к текстовым значениям профайла
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInputProfile.value;
  profileJob.textContent = jobInputProfile.value;
  removePopup(popupEditProfile);
}

function createCards(cardData) {
  const card = template.content.querySelector(".element").cloneNode(true);
  //присваивание значений с инпутов 
  card.querySelector(".element__title").textContent = cardData.name;
  const imageCard = card.querySelector(".element__photo");
  imageCard.src = cardData.link;
  imageCard.alt = `${cardData.name}.`;
  //Увелечение картинок
  imageCard.addEventListener("click", () => {
    openPopup(popupIncreaseCard);
    imagePopupIncrease.src = cardData.link;
    imagePopupIncrease.alt = `${cardData.name}.`;
    descriptionPopupIncrease.textContent = cardData.name;
  })
  //лайк
  card.querySelector(".element__like-btn").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like-btn_active");
  });
  //удаление карточек
  card.querySelector(".element__basket").addEventListener("click", () => {
    card.remove();
  });
  return card;
}

const renderInitialCards = (cardData) => {
  cardContainer.append(createCards(cardData));
}

initialCards.forEach((cardData) => {
  renderInitialCards(cardData);
})

// добавление карточек
function submitAddCardForm(evt) {
  evt.preventDefault();

  const cardDate = {
    name: titleInputAddCard.value,
    link: linkInputAddCard.value,
  };

  cardContainer.prepend(createCards(cardDate));

  removePopup(popupAddCard);
  //обнуляем значения после добавление картинки 
  titleInputAddCard.value = '';
  linkInputAddCard.value = '';
}

//закрытие на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    removePopup(evt.target);
  }
}

//навешиваем слушателя на каждый попап
popups.forEach((popup) => {
  popup.addEventListener("click", closePopupOverlay);
})

//закрытие попапа на Esc
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    //находим открытый попап по модификатору
    const popupCurrent = document.querySelector(".popup_opened");
    //удаляем открытый попап
    removePopup(popupCurrent);
  }
}

enableValidation(validationConfig);

//открытие попапа профиль 
buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  //присваиваем значение из профиля в инпуты
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileJob.textContent;
});

//закрываем попап профиля на крестик
buttonClosePopupEditProfile.addEventListener("click", () => removePopup(popupEditProfile)
);

//сабмитим попап с профилем
formEditProfile.addEventListener("submit", submitEditProfileForm);

//открытие попапа с добавлением карточек 
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddCard);
  disabledSubmitButton(popupAddCard, validationConfig);
});

//закрытие попапа с добавлением карточек на крестик
popupAddClose.addEventListener("click", () => removePopup(popupAddCard));

//закрываем попап на кнопку создать
formCreateCard.addEventListener("submit", submitAddCardForm);

//закрытие попапа с картинкой
popupIncreaseClose.addEventListener("click", () => removePopup(popupIncreaseCard))