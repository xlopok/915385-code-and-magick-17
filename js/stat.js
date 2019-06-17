// var renderStatistics = function(ctx,names,times) {
  // console.log(names);
  // console.log(times);

  // var rectangleWidth = 410;
  // var rectangleHeight = 270;
  // var horizontalIndent = 100;
  // var verticalIndent = 10;

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var COLUMNGAP = 50;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;

  var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxElement  = Math.max.apply(null, times);   // Наибольшее число в массиве

    // Поздравительный текст
    ctx.fillStyle = "#000000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", CLOUD_X + GAP*2, CLOUD_Y  + 30);
    ctx.fillText("Список результатов:", CLOUD_X +  GAP*2, CLOUD_Y  + 50);

    for (var i = 0; i < players.length; i++) {
      ctx.fillText(players[i], (COLUMNGAP + CLOUD_X) + (COLUMNGAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
      // if(players[i] =='Вы') {
      //   ctx.fillStyle = "red"
      // }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect((COLUMNGAP + CLOUD_X), CLOUD_HEIGHT - COLUMNGAP, BAR_WIDTH, 100);
    }
  };

  // Наибольшее число в массиве


//   // Тень белого облака
//   ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
//   ctx.fillRect(horizontalIndent + 10, verticalIndent+ 10, rectangleWidth, rectangleHeight);

//   // Белое облако с текстом и графиком
//   ctx.fillStyle = "#ffffff";
//   ctx.fillRect(horizontalIndent, verticalIndent, rectangleWidth, rectangleHeight);

//   // Поздравительный текст
//   ctx.fillStyle = "#000000";
//   ctx.font = "16px PT Mono";
//   ctx.fillText("Ура вы победили!", horizontalIndent + 20, verticalIndent + 30);
//   ctx.fillText("Список результатов:", horizontalIndent +  20, verticalIndent + 50);

//   var indent = 0;

//   var max = Math.max.apply(null, times); // Наибольшее число в массиве
//   console.log(max);
//   for(var i = 0; i < names.length; i++) {
//     // ctx.textAlign = "center";
//     ctx.fillText(names[i], 120  + indent, 240);
//     indent+=50;
//   }
// }
