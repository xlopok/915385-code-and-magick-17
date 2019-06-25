'use strict';

// 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
var setupDiv = document.querySelector('.setup');
setupDiv.classList.remove('hidden');

// 2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей.

var namesArray = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastnamesArray = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorArray = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColoArray = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomArrayElement = function (myArray) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
};

var wizards = [
  {
    name: getRandomArrayElement(namesArray) + ' ' + getRandomArrayElement(lastnamesArray),
    coatColor: getRandomArrayElement(coatColorArray),
    eyesColor: getRandomArrayElement(eyesColoArray)
  },
  {
    name: getRandomArrayElement(namesArray) + ' ' + getRandomArrayElement(lastnamesArray),
    coatColor: getRandomArrayElement(coatColorArray),
    eyesColor: getRandomArrayElement(eyesColoArray)
  },
  {
    name: getRandomArrayElement(namesArray) + ' ' + getRandomArrayElement(lastnamesArray),
    coatColor: getRandomArrayElement(coatColorArray),
    eyesColor: getRandomArrayElement(eyesColoArray)
  },
  {
    name: getRandomArrayElement(namesArray) + ' ' + getRandomArrayElement(lastnamesArray),
    coatColor: getRandomArrayElement(coatColorArray),
    eyesColor: getRandomArrayElement(eyesColoArray)
  }
];

// 3. На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// 4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.

var similarListElement = setupDiv.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// console.log(wizards);

// 5. Покажите блок .setup-similar, удалив у него CSS-класс hidden.
document.querySelector('.setup-similar').classList.remove('hidden');
