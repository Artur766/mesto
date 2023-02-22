import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector(".popup__form");
  }

  handleFormConfirmation(handleRemoveCard) {
    this._handleRemoveCard = handleRemoveCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {

      evt.preventDefault();

      this._handleRemoveCard();
    });
  }
}