export default class UserInfo {
  constructor({ name, activity, avatar }) {
    this._name = name;
    this._activity = activity;
    this._avatar = avatar;
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
    this._activity.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}