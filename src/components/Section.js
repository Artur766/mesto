export default class Section {
  constructor({ items, renderer }, selector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  //  Метод отвечающийся за отрисвоку всех элементов
  renderItem() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  //Метод принимает DOM элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element)
  }
}