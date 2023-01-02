const buttonEdit = document.querySelector(".profile__edit-btn");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popup = document.querySelectorAll(".popup");
const buttonClosePopupEditProfile = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formEditProfile = document.querySelector(".popup__form");
const nameInputProfile = document.querySelector(".popup__input_type_name");
const jobInputProfile = document.querySelector(".popup__input_type_job");

//Открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  //Навешиваем слушатель на кнопку esc
  document.addEventListener("keydown", closePopupEscape);
}

buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileJob.textContent;
});

//Закрытие попапа
function removePopup(popup) {
  popup.classList.remove("popup_opened");
  //удаляем слушатель на кнопку esc
  document.removeEventListener("keydown", closePopupEscape);
}

buttonClosePopupEditProfile.addEventListener("click", () => removePopup(popupEditProfile)
);

//Присваивание значений инпутов к текстовым значениям профайла
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInputProfile.value;
  profileJob.textContent = jobInputProfile.value;
  removePopup(popupEditProfile);
}

formEditProfile.addEventListener("submit", submitEditProfileForm);

// //5 спринт

//1. Шесть карточек «из коробки»
const initialCards = [
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
// 2.открытие попапа на кнопку плюсик 
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddCard);
});
//закрытие попапа на крестик
popupAddClose.addEventListener("click", () => removePopup(popupAddCard));
//3. добавление карточек
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

formCreateCard.addEventListener("submit", submitAddCardForm);

//закрытие попапа с картинкой
popupIncreaseClose.addEventListener("click", () => removePopup(popupIncreaseCard))

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

enableValidation(validationConfig);

//закрытие на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    removePopup(evt.target);
  }
}

//навешиваем слушателя на каждый попап
popup.forEach((popup) => {
  popup.addEventListener("click", closePopupOverlay);
})

//закрытие попапа на Esc
function closePopupEscape(evt) {
  //находим открытый попап по модификатору
  const popupCurrent = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    //удаляем открытый попап
    removePopup(popupCurrent);
  }
}