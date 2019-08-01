'use strict';
(function () {

  // 1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
  var setup = document.querySelector('.setup');
  // setup.classList.remove('hidden');

  // 2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей.

  var coatColorArray = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColorArray = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var fireballArray = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5'
  ];

  var getRandomArrayElement = function (myArray) {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
  };

  // 3. На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // 4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.

  var similarListElement = setup.querySelector('.setup-similar-list');

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  // module4-task1

  // Открытие/закрытие окна настройки персонажа
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupOpen = document.querySelector('.setup-open');
  // var setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  // var setupUserName = setup.querySelector('.setup-user-name');
  var inputUsername = document.querySelector('.setup-user-name');


  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && inputUsername !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    // NEW
    setup.style.top = 80 + 'px';
    setup.style.left = 50 + '%';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });


  // Изменение цвета мантии персонажа по нажатию

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var inputCoat = setup.querySelector('input[name="coat-color"]');
  var inputEyes = setup.querySelector('input[name="eyes-color"]');
  var inputFireball = setup.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var randomColor = getRandomArrayElement(coatColorArray);
    wizardCoat.style.fill = randomColor;
    inputCoat.value = randomColor;
  });

  wizardEyes.addEventListener('click', function () {
    var randomColor = getRandomArrayElement(eyesColorArray);
    wizardEyes.style.fill = randomColor;
    inputEyes.value = randomColor;
  });

  wizardFireball.addEventListener('click', function () {
    var randomColor = getRandomArrayElement(fireballArray);
    wizardFireball.style.backgroundColor = randomColor;
    inputFireball.value = randomColor;
  });

  // Отправка формы
  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

})();
