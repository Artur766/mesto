const imagePopupIncrease = document.querySelector(".popup__image");
const descriptionPopupIncrease = document.querySelector(".popup__description");
const popupIncreaseCard = document.querySelector(".popup_type_increase");
const popupIncreaseClose = popupIncreaseCard.querySelector(".popup__close-btn");
const popups = document.querySelectorAll(".popup");

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  //Навешиваем слушатель на кнопку esc
  document.addEventListener("keydown", closePopupEscape);
}

//функция закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  //удаляем слушатель на кнопку esc
  document.removeEventListener("keydown", closePopupEscape);
}

//функция закрытие попапа на Esc
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    //находим открытый попап по модификатору
    const popupCurrent = document.querySelector(".popup_opened");
    //удаляем открытый попап
    closePopup(popupCurrent);
  }
}

//функция увелечение картинки 
function openPopupIncreaseCard(name, link) {
  openPopup(popupIncreaseCard);
  imagePopupIncrease.src = link;
  imagePopupIncrease.alt = `${name}.`;
  descriptionPopupIncrease.textContent = name;
}

//функция закрытие на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//навешиваем слушателя на каждый попап
popups.forEach((popup) => {
  popup.addEventListener("click", closePopupOverlay);
})

//закрытие попапа с картинкой
popupIncreaseClose.addEventListener("click", () => closePopup(popupIncreaseCard));

export { openPopupIncreaseCard, openPopup, closePopup };