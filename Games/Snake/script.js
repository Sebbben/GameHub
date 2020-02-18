var mainContainer = document.getElementById("main-container");
var size = 16;
var length = 1;
var gameOver = false;
var playerX = 5;
var playerY = 5;
var dir = "left";
var snake = [];
var appleX = Math.floor(Math.random() * size);
var appleY = Math.floor(Math.random() * size);

class snakePeace {
  constructor(x, y, dur) {
    this.x = x;
    this.y = y;
    this.dur = dur;
  }
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

function onLoopTimer() {
  if (dir == "right") playerX += 1;
  else if (dir == "left") playerX -= 1;
  else if (dir == "down") playerY += 1;
  else playerY -= 1;
  if (
    playerY < 0 ||
    playerY > size - 1 ||
    playerX < 0 ||
    playerX > size - 1 ||
    mainContainer.children[playerY].children[playerX].classList.contains(
      "snake"
    )
  ) {
    clearInterval(mainLoop);
    alert("You lose");
  }
  if (
    mainContainer.children[playerY].children[playerX].classList.contains(
      "apple"
    )
  ) {
    mainContainer.children[playerY].children[playerX].classList.remove("apple");
    length++;
    appleX = Math.floor(Math.random() * size);
    appleY = Math.floor(Math.random() * size);
    mainContainer.children[appleY].children[appleX].classList.add("apple");
  }
  getLonger();
  draw();
}

function getLonger() {
  for (i = 0; i < snake.length; i++) {
    snake[i][length]++;
  }
  snake.push(new snakePeace(playerX, playerY, length));
}

function draw() {
  for (i = 0; i < snake.length; i++) {
    if (snake[i]["dur"] == 0) {
      mainContainer.children[snake[i]["y"]].children[
        snake[i]["x"]
      ].classList.remove("snake");
      snake.splice(i, 1);
    } else {
      snake[i]["dur"]--;
      mainContainer.children[snake[i]["y"]].children[
        snake[i]["x"]
      ].classList.add("snake");
    }
  }
}

//init

window.addEventListener("keydown", e => {
  if (e.keyCode == 37) dir = "left";
  else if (e.keyCode == 38) dir = "up";
  else if (e.keyCode == 39) dir = "right";
  else if (e.keyCode == 40) dir = "down";
});

snake.push(new snakePeace(playerX, playerY, length));

mainContainer.children[appleY].children[appleX].classList.add("apple");

var mainLoop = setInterval(() => {
  onLoopTimer();
}, 1000); // main loop
