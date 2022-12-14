//добавляем ошибку
function showInputError(formElement, inputElement, config) {
  //находим ошибки (инпуты)
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  //добовляем спаны 
  errorElement.classList.add(config.errorClass);
  //добавляем дефолтно-браузерный текст ошибки
  errorElement.textContent = inputElement.validationMessage;
  //добавляем инпуту красную обводку
  inputElement.classList.add(config.inputErrorClass);
}

//убираем ошибку
function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
}


// функция проверяет есть ли у инпутов валидация
function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

//проходимся по всем инпутам, для нахождения у каждого валидности
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

//блокирует кнопку
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//находим список инпутов у каждой формы и навешиваем обработчики на событие инпут
function setEventListeners(formElement, config) {
  //находим инпуты
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  //навешиваем обработчики событий на инпуты
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
}

function enableValidation(config) {
  //находим каждую форму 
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  //проходимся по массиву попапов
  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}

//функция для блокировки кнопки 
function disabledSubmitButton(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}
