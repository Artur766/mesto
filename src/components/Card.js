export default class Card {
  constructor(data, templateSelector, currentUserId, cardId, increasePhotoCardClick, openConfirmationPopup, addLike, removeLike) {
    this._name = data.name;
    this._link = data.link;
    this._currentUserId = currentUserId;
    this._idCard = cardId;
    this._idUser = data.owner._id;
    this._likesLength = data.likes.length;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._increasePhotoCardClick = increasePhotoCardClick;
    this._openConfirmationPopup = openConfirmationPopup;
    this._addLike = addLike;
    this._removeLike = removeLike;
    this._element = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    this._likeButton = this._element.querySelector(".element__like-btn");
    this._cardImage = this._element.querySelector(".element__photo");
    this._popupConfirmation = document.querySelector(".popup_type_confirmation");
    this._basket = this._element.querySelector(".element__basket");
    this._buttonDeleteCard = this._popupConfirmation.querySelector(".popup__button");
    this._numberLikes = this._element.querySelector(".element__number-likes");
    this._titleCard = this._element.querySelector(".element__title");
  }

  //метод проверяет id текущего пользователя и id лайкнувших эту карточку 
  _isLikeCurrUser() {
    // this._likes.forEach((item) => {
    //   if (item._id === this._currentUserId) {
    //     return true;
    //   }
    // })
    for (let index = 0; index < this._likes.length; index++) {
      if (this._likes[index]._id === this._currentUserId) {
        return true
      }
    }
    return false
  }

  generateCard() {

    this._setEventListeners();

    //условия проверяет id текущего пользовотеля и id юзера, который создал эту карточку 
    if (this._idUser === this._currentUserId) {
      this._basket.classList.add("element__basket_visable");
    }

    //при рендере изменяет количество лайков 
    this._numberLikes.textContent = this._likesLength;

    //условие закрашывает сердечеко при рендере 
    if (this._isLikeCurrUser()) {
      this._likeButton.classList.add("element__like-btn_active");
    }

    // Добавим данные
    this._titleCard.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._name}.`;
    // Вернём элемент наружу
    return this._element;
  }

  // добавление всех слушателей на карточку
  _setEventListeners() {
    //событие увелечение картинки
    this._cardImage.addEventListener("click", () => {
      this._increasePhotoCardClick(this._name, this._link);
    });

    //событие лайк
    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });

    //открытие попа для подтверждения удаления карточки 
    this._basket.addEventListener("click", () => {
      this._openConfirmationPopup();
    });
  }

  //метод изменяет количество лайкаов
  changingNumberLikes(data) {
    this._numberLikes.textContent = data.likes.length;
  }

  //функция лайк
  _toggleLike() {
    if (this._likeButton.classList.contains("element__like-btn_active")) {
      this._removeLike();
      this._likeButton.classList.remove("element__like-btn_active");
    } else {
      this._addLike();
      this._likeButton.classList.add("element__like-btn_active");
    }
  }

  //функция удаление карточки
  removeCard() {
    this._element.remove();
  }
}
