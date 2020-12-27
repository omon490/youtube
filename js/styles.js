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
var elMenu = $_(`.page-body`);
var elMenuOpen = $_(`.page-body--open`);

elMenuToggler.addEventListener(`click`, function () {
  // console.log(`ishladi`);
  elMenu.classList.toggle(`page-body--open`);
});
