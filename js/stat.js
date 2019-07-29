'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var COLUMNGAP = 50;
  var BAR_WIDTH = 40;
  var barHeight = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxElement = Math.max.apply(null, times); // Наибольшее число в массиве

    // Поздравительный текст
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + 30);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + 50);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(players[i], (COLUMNGAP + CLOUD_X) + (COLUMNGAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);

      if (players[i] === 'Вы') {
        ctx.fillstyle = 'red';
      } else {
        var randomOpacity = Math.random();
        ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity + ')';
      }
      ctx.fillRect((COLUMNGAP + CLOUD_X) + (COLUMNGAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP * 3) - ((barHeight * times[i]) / maxElement), BAR_WIDTH, (barHeight * times[i]) / maxElement);

      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(Math.round(times[i]), (COLUMNGAP + CLOUD_X) + (COLUMNGAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP * 3) - ((barHeight * times[i]) / maxElement) - GAP);
    }
  };

})();
