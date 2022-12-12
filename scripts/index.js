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
function popupOpen() {
  popupEdit.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

ButtonEdit.addEventListener("click", popupOpen);

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
const elementsContainer = document.querySelector(".elements");
const template = document.querySelector("#cards-template");
const titleInput = document.querySelector(".popup__text_type_title");
const linkInput = document.querySelector(".popup__text_type_link");
const element = template.content.querySelector(".element");
const popupAdd = document.querySelector(".popup_type_add");
const popupAddClose = popupAdd.querySelector(".popup__close-btn");
const buttonCreate = popupAdd.querySelector(".popup__save-btn");
const buttonAdd = document.querySelector(".profile__add-btn");




function createElemnts(cardData) {
  const element = template.content.querySelector(".element").cloneNode(true);
  element.querySelector(".element__title").textContent = cardData.name;

  const elementImage = element.querySelector(".element__photo");
  elementImage.src = cardData.link;
  elementImage.alt = `${cardData.name}.`;

  element.querySelector(".element__like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-btn_active");
  });
  element.querySelector(".element__basket").addEventListener("click", () => {
    element.remove();
  });
  return element;
}

const renderElement = (cardData) => {
  elementsContainer.append(createElemnts(cardData));
}

initialCards.forEach((cardData) => {
  renderElement(cardData);
})
// 2.открытие попапа на кнопку плюсик и закрытие на крестик
function popupAddOpen() {
  popupAdd.classList.add("popup_opened");
}

buttonAdd.addEventListener("click", popupAddOpen);

popupAddClose.addEventListener("click", () => popupRemove(1));

//3. добавление карточек
const addCard = () => {
  // evt.preventDefault();

  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };

  elementsContainer.prepend(createElemnts(cardData));

  popupRemove(1);
  //обнуляем значения после добавление картинки 
  titleInput.value = '';
  linkInput.value = '';
}

buttonCreate.addEventListener("click", addCard);

const cardImage = document.querySelectorAll(".element__photo");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(cardImage);
const cardTitle = document.querySelectorAll(".element__title");
console.log(cardTitle);
const popupIncrease = document.querySelector(".popup_type_increase");
const popupImage = document.querySelector(".popup__image");
console.log(popupImage);
const descriptionPopupImage = document.querySelector(".popup__description");
console.log(descriptionPopupImage);




function popupIncreaseOpen() {
  popupIncrease.classList.add("popup_opened");
  for (let i = 0; i < cardImage.length; i += 1) {
    popupImage.src = cardImage[i].src;
    console.log(popupImage.src)
    return cardImage
  }
  // cardImage.forEach(function (item) {
  //   popupImage.src = item.src;
  // });
  cardTitle.forEach(function (item) {
    descriptionPopupImage.textContent = item.textContent;
    console.log(descriptionPopupImage.textContent)
  });
}


cardImage.forEach(function (item) {
  item.addEventListener("click", popupIncreaseOpen);
})

// cardImage.addEventListener("click", popupIncreaseOpen)

//закрытие попапа с картинкой
const popupIncreaseClose = popupIncrease.querySelector(".popup__close-btn")
popupIncreaseClose.addEventListener("click", () => popupRemove(2))





