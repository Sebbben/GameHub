const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
var colors = [];
var colorDup = [].concat(colors)
var score = 0;
var currentIndex = 0;
var pCounter = document.createElement("p");


function lightUp(color) {
  if (color == "green") {
    topLeft.style.opacity = 0.5;
    setTimeout(function () {
      topLeft.style = "";
    }, 500);
  } else if (color == "red") {
    topRight.style.opacity = 0.5;
    setTimeout(function () {
      topRight.style = "";
    }, 500);
  } else if (color == "yellow") {
    bottomLeft.style.opacity = 0.5;
    setTimeout(function () {
      bottomLeft.style = "";
    }, 500);
  } else {
    bottomRight.style.opacity = 0.5;
    setTimeout(function () {
      bottomRight.style = "";
    }, 500);
  }
}

function getInputs(pickedColor) {
  lightUp(pickedColor);
  if (pickedColor == colorDup[0]) {
    colorDup.shift()
  } else lose()
  if (colorDup.length == 0) {
    newColor()
    colorDup = [].concat(colors);
    score++;
    document.getElementById("score").innerHTML = score;
    var i = 0;
    var loop = setInterval(() => {
      lightUp(colors[i])
      i++;
      if (i >= colors.length) {
        clearInterval(loop)
      }
    }, 1000);
  }
}

function newColor() {
  var randNum = Math.ceil(Math.random() * 4);
  if (randNum == 1) {
    randNum = "green";
  } else if (randNum == 2) {
    randNum = "red";
  } else if (randNum == 3) {
    randNum = "yellow";
  } else {
    randNum = "blue";
  }
  colors.push(randNum);
}

function startGame() {
  var pCounter = document.createElement("p");
  pCounter.style.position = "fixed";
  pCounter.style.top = "50%";
  pCounter.style.left = "50%";
  pCounter.style.transform = "translate(-50%,-50%)";
  pCounter.style.color = "black";
  pCounter.id = "score"
  pCounter.innerHTML = score;
  document.body.append(pCounter);
  newColor();
  colorDup = [].concat(colors)
  lightUp(colors[0]);
}

function lose() {
  const myNode = document.body;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  document.body.style.backgroundColor = "red";
  var loseText = document.createElement("h1");
  loseText.innerHTML = "You lose";
  loseText.style.position = "fixed"
  loseText.style.left = "50%"
  loseText.style.top = "50%"
  loseText.style.transform = "translate(-50%,-50%)"
  document.body.append(loseText)
}
