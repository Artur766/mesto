export default class Card {
  constructor(data, templateSelector, increasePhotoCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._increasePhotoCardClick = increasePhotoCardClick;
    this._element = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    this._likeButton = this._element.querySelector(".element__like-btn");
    this._cardImage = this._element.querySelector(".element__photo");
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector(".element__title").textContent = this._name;
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

    //событие удаление карточки 
    this._element.querySelector(".element__basket").addEventListener("click", () => {
      this._removeCard();
    });
  }

  //функция лайк
  _toggleLike() {
    this._likeButton.classList.toggle("element__like-btn_active");
  }

  //функция удаление карточки
  _removeCard() {
    this._element.remove();
  }
}