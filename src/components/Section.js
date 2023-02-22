export default class Section {
  constructor(renderer, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  //  Метод отвечающийся за отрисвоку всех элементов
  renderItem(elements) {
    elements.forEach((element) => {
      this._container.append(this._renderer(element));
    });
  }

  //Метод принимает DOM элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(this._renderer(element));
  }
}