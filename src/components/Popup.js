export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._closeButton = this._popup.querySelector(".popup__close-btn");
  }

  //открытие попапа
  open() {
    this._popup.classList.add("popup_opened");
    //Навешиваем слушатель на кнопку esc
    document.addEventListener("keydown", this._handleEscClose);
  }

  //закрытие на кнопку попапа
  close() {
    this._popup.classList.remove("popup_opened");
    //удаляем слушатель на кнопку esc
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //закрытие на esc
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      //удаляем открытый попап
      this.close();
    }
  }

  setEventListeners() {
    //закрытие попапа на кнопку крестик
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    //закрытие попапа по оверлэу
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}