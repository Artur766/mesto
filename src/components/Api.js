export default class Api {
  constructor(config) {
    this.headers = config.headers;
    this.baseUrl = config.baseUrl;
  }

  createCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // читает ответ с сервера и возвращает промис
        }
        return Promise.reject(new Error("Произошла ошибка"))
      })
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // читает ответ с сервера и возвращает промис
        }
        return Promise.reject(new Error("Произошла ошибка"))
      })
  }

  getUserInformation() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // читает ответ с сервера и возвращает промис
        }
        return Promise.reject(new Error("Произошла ошибка"))
      })
  }

  updatingUserData(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // читает ответ с сервера и возвращает промис
        }
        return Promise.reject(new Error("Произошла ошибка"))
      })
  }

  changeAvatar(dataUrl) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(dataUrl)
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // читает ответ с сервера и возвращает промис
        }
        return Promise.reject(new Error("Произошла ошибка"))
      })
  }

  deleteCard(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then((res) => {
        return res.json();
      });
  }

  putLike(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
      method: "PUT",
      headers: this.headers
    })
      .then((res) => {
        return res.json();
      });
  }

  removeLike(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
      method: "DELETE",
      headers: this.headers
    })
      .then((res) => {
        return res.json();
      });
  }
}

