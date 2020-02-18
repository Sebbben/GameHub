var mainContainer = document.getElementById("main-container");
var size = 16;
var length = 1;
var gameOver = false;
var playerX = 0;
var playerY = 0;
var dir = "left";
var snake = [];

class snakePeace {
  constructor(x, y, dur) {
    this.x = x;
    this.y = y;
    this.dur = dur;
  }
}

function getLonger() {
  snake.push(new snakePeace(x, y, length));
  for(i=)
}

for (i = 0; i < size; i++) {
  var row = document.createElement("div");
  for (j = 0; j < size; j++) {
    var div = document.createElement("div");
    div.classList.add("playArea");
    div.value = 1;
    row.append(div);
  }
  mainContainer.append(row);
}

while (!gameOver) {
  gameOver = true;
}
