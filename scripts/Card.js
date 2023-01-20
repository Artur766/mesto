import { openPopupIncreaseCard } from "./index.js";

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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



    // Добавим данные
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__photo").src = this._link;
    this._element.querySelector(".element__photo").alt = `${this._name}.`;
    // Вернём элемент наружу
    return this._element;
  }

  // добавление всех слушателей на карточку
  _setEventListeners() {
    //событие увелечение картинки
    this._element.querySelector(".element__photo").addEventListener("click", () => {
      this._increasePhotoCardClick();
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

  //функция увелечение картинки при клике
  _increasePhotoCardClick() {
    openPopupIncreaseCard(this._name, this._link)
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

