export default class Api {
  constructor(config) {
    this.headers = config.headers;
    this.baseUrl = config.baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json(); // читает ответ с сервера и возвращает промис
    }
    return Promise.reject(new Error("Произошла ошибка"))
  }


  createCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(this._handleResponse)
  }

  getUserInformation() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(this._handleResponse)
  }

  updatingUserData(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this._handleResponse)
  }

  changeAvatar(dataUrl) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(dataUrl)
    })
      .then(this._handleResponse)
  }

  deleteCard(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then(this._handleResponse);
  }

  putLike(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
      method: "PUT",
      headers: this.headers
    })
      .then(this._handleResponse);
  }

  removeLike(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
      method: "DELETE",
      headers: this.headers
    })
      .then(this._handleResponse);
  }
}

