import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._buttonSave = this._popup.querySelector(".popup__button");
  }

  // метод собирает данные всех полей формы
  _getInputValues() {
    this._formValues = {}; // создаём пустой объект

    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading, nameButton) {
    if (isLoading) {
      this._buttonSave.textContent = "Сохранение...";
    } else {
      this._buttonSave.textContent = nameButton;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();//отменяем стандартное действие при сабмите

      this._handleFormSubmit(this._getInputValues());
    });
  }
}