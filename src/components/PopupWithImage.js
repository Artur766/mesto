import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector(".popup__image");;
    this._description = this._popup.querySelector(".popup__description");
  }

  //открытие попапа при клике на картинку
  open(name, link) {
    this._image.src = link;
    this._image.alt = `${name}.`;
    this._description.textContent = name;
    super.open();
  }
}