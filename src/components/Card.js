export default class Card {
  constructor(data, templateSelector, increasePhotoCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._increasePhotoCardClick = increasePhotoCardClick;
  }

  _getTemplate() {
    const card = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return card;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    const imageCard = this._element.querySelector(".element__photo");

    // Добавим данные
    this._element.querySelector(".element__title").textContent = this._name;
    imageCard.src = this._link;
    imageCard.alt = `${this._name}.`;
    // Вернём элемент наружу
    return this._element;
  }

  // добавление всех слушателей на карточку
  _setEventListeners() {
    //событие увелечение картинки
    this._element.querySelector(".element__photo").addEventListener("click", () => {
      this._increasePhotoCardClick(this._name, this._link);
    });

    //событие лайк
    this._element.querySelector(".element__like-btn").addEventListener("click", () => {
      this._addLikeClick();
    });

    //событие удаление карточки 
    this._element.querySelector(".element__basket").addEventListener("click", () => {
      this._removeCardBasketClick();
    });
  }

  //функция лайк
  _addLikeClick() {
    this._element.querySelector(".element__like-btn").classList.toggle("element__like-btn_active");
  }

  //функция удаление карточки
  _removeCardBasketClick() {
    this._element.remove();
  }
}