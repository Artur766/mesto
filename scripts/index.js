const ButtonEdit = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close-btn");
const profileName = document.querySelector(".profile__name");//
const profileJob = document.querySelector(".profile__job");
const formSubmit = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");

//Открытие попапа и присваивание текстовых значений профайла в инпут
function popupOpen() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

ButtonEdit.addEventListener("click", popupOpen);

//Закрытие попапа 
function popupRemove() {
  popup.classList.remove("popup_opened");
}

popupClose.addEventListener("click", popupRemove);

//Присваивание значений инпутов к текстовым значениям профайла
function valuesSave(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupRemove();
}

formSubmit.addEventListener("submit", valuesSave);


