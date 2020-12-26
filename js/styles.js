// Function
{var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

// var elIdish = $_('.idish');
// var elButton = $_('button', elIdish);

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};}
// Function


var elMenuToggler = $_(`.js-site-header__toggler`);
// var elModalToggler = $_('.menu-burger');
// var elModal = document.querySelector('.main-body');
// var elModalClose = document.querySelector('.main-body--open');
// var elModalOpen = document.querySelector('.menu-burger--close');

// var elForm = document.querySelector('.header-form');
// var elFormOpen = document.querySelector('.header-form--open');
// var elFormOpenToggler = document.querySelector('.header-form__search-btn');


// elFormOpenToggler.addEventListener('click', function () {
//   elForm.classList.toggle('header-form--open');
// });

// elModalToggler.addEventListener('click', function () {
//   elModal.classList.toggle('main-body--open');
// });
// elModalOpen.addEventListener('click', function () {
//   elModal.classList.remove('main-body--open');
// });
