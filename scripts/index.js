const buttonEdit = document.querySelector(".profile__edit-btn");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popup = document.querySelectorAll(".popup");
const popupClose = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formEditProfile = document.querySelector(".popup__form");
const nameInputProfile = document.querySelector(".popup__text_type_name");
const jobInputProfile = document.querySelector(".popup__text_type_job");

//Открытие попапа и присваивание текстовых значений профайла в инпут
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileJob.textContent;
});

//Закрытие всех попаов
function removePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupClose.addEventListener("click", () => removePopup(popupEditProfile));

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
const titleInputAddCard = document.querySelector(".popup__text_type_title");
const linkInputAddCard = document.querySelector(".popup__text_type_link");
const card = template.content.querySelector(".element");
const popupAddCard = document.querySelector(".popup_type_add");
const popupAddClose = popupAddCard.querySelector(".popup__close-btn");
const formCreateCard = popupAddCard.querySelector(".popup__form");
const buttonAdd = document.querySelector(".profile__add-btn");
const popupIncreaseCard = document.querySelector(".popup_type_increase");
const ImagePopupIncrease = document.querySelector(".popup__image");
const DescriptionPopupIncrease = document.querySelector(".popup__description");
const popupIncreaseClose = popupIncreaseCard.querySelector(".popup__close-btn")

function createCards(cardData) {
  const card = template.content.querySelector(".element").cloneNode(true);
  //присваивание значений с инпутов 
  card.querySelector(".element__title").textContent = cardData.name;
  const ImageCard = card.querySelector(".element__photo");
  ImageCard.src = cardData.link;
  ImageCard.alt = `${cardData.name}.`;
  //Увелечение картинок
  ImageCard.addEventListener("click", () => {
    openPopup(popupIncreaseCard);
    ImagePopupIncrease.src = cardData.link;
    ImagePopupIncrease.alt = `${cardData.name}.`;
    DescriptionPopupIncrease.textContent = cardData.name;
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





