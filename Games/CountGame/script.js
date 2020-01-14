var numOfNum = 0;
var numbers = [];
const body = document.body;
var currentNum = 0;

document.getElementById("numButton").addEventListener("click", function() {
  numOfNum = document.getElementById("numInput").value;
  document.getElementById("numInputDiv").remove();
  startGame();
});

function startGame() {
  for (i = 0; i < numOfNum; i++) {
    numbers.push(i);
  }
  numbers = shuffle(numbers);
  var main = document.createElement("div");
  main.id = "mainContainer";
  document.body.append(main);
  var ul = document.createElement("ul");
  main.append(ul);
  for (i in numbers) {
    var li = document.createElement("li");
    li.innerHTML = numbers[i];
    li.addEventListener("click", function() {
      this.remove();
      nextNumber(this.innerHTML);
    });
    ul.append(li);
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function nextNumber(num) {
  if (currentNum + 1 == numOfNum) {
    document.getElementById("mainContainer").remove();
    var win = document.createElement("h1");
    win.innerHTML = "You win!";
    document.body.style.backgroundColor = "lime";
    win.fontSize = "400px";
    win.style.color = "#000";
    win.style.zIndex = "-1";
    win.style.verticalAlign = "middle";
    document.body.append(win);
  } else if (num == currentNum) {
    currentNum++;
  } else {
    document.getElementById("mainContainer").remove();
    var lose = document.createElement("h1");
    lose.innerHTML = "You lose!";
    document.body.style.backgroundColor = "red";
    lose.fontSize = "400px";
    lose.style.color = "#000";
    lose.style.zIndex = "-1";
    lose.style.verticalAlign = "middle";
    document.body.append(lose);
  }
}
