const ButtonEdit = document.querySelector(".profile__edit-btn");
const popupEdit = document.querySelector(".popup_type_edit");
const popup = document.querySelectorAll(".popup");
const popupClose = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formSubmit = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");


//Открытие попапа и присваивание текстовых значений профайла в инпут
function popupOpen(popup) {
  popup.classList.add("popup_opened");
}

ButtonEdit.addEventListener("click", () => {
  popupOpen(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//Закрытие всех попаов
function popupRemove(index) {
  popup[index].classList.toggle("popup_opened");
}

popupClose.addEventListener("click", () => popupRemove(0));

//Присваивание значений инпутов к текстовым значениям профайла
function valuesSave(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupRemove(0);
}

formSubmit.addEventListener("submit", valuesSave);

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
const CardsContainer = document.querySelector(".elements");
const template = document.querySelector("#cards-template");
const titleInput = document.querySelector(".popup__text_type_title");
const linkInput = document.querySelector(".popup__text_type_link");
const element = template.content.querySelector(".element");
const popupAdd = document.querySelector(".popup_type_add");
const popupAddClose = popupAdd.querySelector(".popup__close-btn");
const formCreateCard = popupAdd.querySelector(".popup__form");
const buttonAdd = document.querySelector(".profile__add-btn");
const popupIncrease = document.querySelector(".popup_type_increase");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");
const popupIncreaseClose = popupIncrease.querySelector(".popup__close-btn")

function createCards(cardData) {
  const element = template.content.querySelector(".element").cloneNode(true);
  //присваивание значений с инпутов 
  element.querySelector(".element__title").textContent = cardData.name;
  const elementImage = element.querySelector(".element__photo");
  elementImage.src = cardData.link;
  elementImage.alt = `${cardData.name}.`;
  //Увелечение картинок
  elementImage.addEventListener("click", () => {
    popupOpen(popupIncrease);
    popupImage.src = cardData.link;
    popupDescription.textContent = cardData.name;
  })
  //лайк
  element.querySelector(".element__like-btn").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like-btn_active");
  });
  //удаление карточек
  element.querySelector(".element__basket").addEventListener("click", () => {
    element.remove();
  });
  return element;
}

const renderElement = (cardData) => {
  CardsContainer.append(createCards(cardData));
}

initialCards.forEach((cardData) => {
  renderElement(cardData);
})
// 2.открытие попапа на кнопку плюсик 
buttonAdd.addEventListener("click", () => {
  popupOpen(popupAdd);
});
//закрытие попапа на крестик
popupAddClose.addEventListener("click", () => popupRemove(1));
//3. добавление карточек
function addCard(evt) {
  evt.preventDefault();

  const cardDate = {
    name: titleInput.value,
    link: linkInput.value,
  };

  CardsContainer.prepend(createCards(cardDate));

  popupRemove(1);
  //обнуляем значения после добавление картинки 
  titleInput.value = '';
  linkInput.value = '';
}

formCreateCard.addEventListener("submit", addCard);

//закрытие попапа с картинкой
popupIncreaseClose.addEventListener("click", () => popupRemove(2))





