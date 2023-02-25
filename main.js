(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var n,r;return n=e,(r=[{key:"renderItem",value:function(e){var t=this;e.forEach((function(e){t._container.append(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n,r,o,i,u,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._currentUserId=r,this._idCard=o,this._idUser=t.owner._id,this._likesLength=t.likes.length,this._likes=t.likes,this._templateSelector=n,this._increasePhotoCardClick=i,this._openConfirmationPopup=u,this._addLike=a,this._removeLike=c,this._element=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0),this._likeButton=this._element.querySelector(".element__like-btn"),this._cardImage=this._element.querySelector(".element__photo"),this._popupConfirmation=document.querySelector(".popup_type_confirmation"),this._basket=this._element.querySelector(".element__basket"),this._buttonDeleteCard=this._popupConfirmation.querySelector(".popup__button"),this._numberLikes=this._element.querySelector(".element__number-likes"),this._titleCard=this._element.querySelector(".element__title")}var t,n;return t=e,(n=[{key:"_isLikeCurrUser",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._currentUserId)return!0;return!1}},{key:"generateCard",value:function(){return this._setEventListeners(),this._idUser===this._currentUserId&&this._basket.classList.add("element__basket_visable"),this._numberLikes.textContent=this._likesLength,this._isLikeCurrUser()&&this._likeButton.classList.add("element__like-btn_active"),this._titleCard.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt="".concat(this._name,"."),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._increasePhotoCardClick(e._name,e._link)})),this._likeButton.addEventListener("click",(function(){e._toggleLike()})),this._basket.addEventListener("click",(function(){e._openConfirmationPopup()}))}},{key:"changingNumberLikes",value:function(e){this._numberLikes.textContent=e.likes.length,this._likeButton.classList.contains("element__like-btn_active")?this._likeButton.classList.remove("element__like-btn_active"):this._likeButton.classList.add("element__like-btn_active")}},{key:"_toggleLike",value:function(){this._likeButton.classList.contains("element__like-btn_active")?this._removeLike():this._addLike()}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formSelector=n,this._inputList=Array.from(this._formSelector.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formSelector.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));t.classList.add(this._config.errorClass),t.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._config.errorClass),t.textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disabledSubmitButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetInput",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),t.value=""}))}},{key:"disabledSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t){var n=t.name,r=t.activity,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._activity=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,activity:this._activity.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._activity.textContent=e.about,this._avatar.src=e.avatar}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var d=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=h(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._description=t._popup.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt="".concat(e,"."),this._description.textContent=e,v(g(u.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._buttonSave=n._popup.querySelector(".popup__button"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){E(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e,t){this._buttonSave.textContent=e?"Сохранение...":t}},{key:"setEventListeners",value:function(){var e=this;E(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"handleFormConfirmation",value:function(e){this._handleRemoveCard=e}},{key:"setEventListeners",value:function(){var e=this;q(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleRemoveCard()}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headers=t.headers,this.baseUrl=t.baseUrl}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("Произошла ошибка"))}},{key:"createCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._handleResponse)}},{key:"getUserInformation",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._handleResponse)}},{key:"updatingUserData",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then(this._handleResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},V=document.querySelector(".profile__edit-btn"),A=document.querySelector(".profile__add-btn"),N=document.querySelector(".popup__input_type_title"),F=document.querySelector(".popup__input_type_link"),J=document.querySelector(".popup_type_edit").querySelector(".popup__form"),H=(document.querySelector(".elements"),document.querySelector(".popup_type_add").querySelector(".popup__form")),z=document.querySelector(".profile__name"),M=document.querySelector(".profile__job"),G=document.querySelector(".popup__input_type_name"),K=document.querySelector(".popup__input_type_job"),Q=document.querySelector(".popup_type_avatar").querySelector(".popup__form"),W=Q.querySelector(".popup__input_type_link"),X=document.querySelector(".profile__edit-avatar"),Y=document.querySelector(".profile__avatar"),Z=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"f5f41958-0d62-4bdb-b46a-d0e71e230b2c","Content-Type":"application/json"}}),$=new f({name:z,activity:M,avatar:Y}),ee=void 0,te=[Z.getInitialCards(),Z.getUserInformation()];Promise.all(te).then((function(e){$.setUserInfo(e[1]),ee=e[1]._id,ne.renderItem(e[0])})).catch((function(e){console.log(e)}));var ne=new n((function(e){return(n=new i(t=e,"#cards-template",ee,t._id,(function(e,t){re.open(e,t)}),(function(){ae.open(),ae.handleFormConfirmation((function(){Z.deleteCard(t._id).then((function(){n.removeCard(),ae.close()})).catch((function(e){console.log(e)}))}))}),(function(){Z.putLike(t._id).then((function(e){n.changingNumberLikes(e)})).catch((function(e){console.log(e)}))}),(function(){Z.removeLike(t._id).then((function(e){n.changingNumberLikes(e)})).catch((function(e){console.log(e)}))}))).generateCard();var t,n}),".elements"),re=new S(".popup_type_increase");re.setEventListeners();var oe=new O(".popup_type_add",(function(e){oe.renderLoading(!0),Z.createCard({name:e[N.name],link:e[F.name]}).then((function(e){ne.addItem(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1,"Создать")}))}));oe.setEventListeners();var ie=new O(".popup_type_edit",(function(e){ie.renderLoading(!0),Z.updatingUserData({name:e[G.name],about:e[K.name]}).then((function(e){$.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.renderLoading(!1,"Сохранить")}))}));ie.setEventListeners();var ue=new O(".popup_type_avatar",(function(e){ue.renderLoading(!0),Z.changeAvatar({avatar:e[W.name]}).then((function(e){$.setUserInfo(e),ue.close()})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1,"Сохранить")}))}));ue.setEventListeners();var ae=new T(".popup_type_confirmation");ae.setEventListeners(),V.addEventListener("click",(function(){ie.open();var e=$.getUserInfo();G.value=e.name,K.value=e.activity,le.disabledSubmitButton()})),A.addEventListener("click",(function(){oe.open(),ce.disabledSubmitButton(),ce.resetInput()})),X.addEventListener("click",(function(){ue.open(),se.disabledSubmitButton(),se.resetInput()}));var ce=new c(D,H);ce.enableValidation();var le=new c(D,J);le.enableValidation();var se=new c(D,Q);se.enableValidation()})();