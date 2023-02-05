export default class UserInfo {
  constructor({ name, activity }) {
    this._name = name;
    this._activity = activity;
  }
  //возвращает объект с данными пользователя
  getUserInfo() {
    const dataUser = {
      name: this._name.textContent,
      activity: this._activity.textContent
    }
    return dataUser;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._activity.textContent = data.activity;
  }
}