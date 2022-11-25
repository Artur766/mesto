//Открытие и закрытие попап
const editButton = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close-btn");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened"); //добавляем класс
})

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened"); //удаляем класс
})



//сохранение значение value

// Находим форму
const formSubmit = document.querySelector(".popup__form");



//находим инпуты
let nameInput = document.querySelector(".popup__text_type_name");
let jobInput = document.querySelector(".popup__text_type_job");

formSubmit.addEventListener("submit", function (evt) {
  evt.preventDefault(); //отменяем стандартную отправку формы
  nameInput.value; //получаем значеие полей из свойства value
  jobInput.value;
  let profileName = document.querySelector(".profile__name");//Находим значение которые будут меняться
  let profileJob = document.querySelector(".profile__job");
  profileName.textContent = nameInput.value; //Заменяем значения 
  profileJob.textContent = jobInput.value;
  popup.classList.remove("popup_opened"); //Удаляем класс(закрываем форму)
})


