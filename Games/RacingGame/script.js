const mainContainer = document.getElementById("main-container");
var x = 0;
var y = 0;
var area = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
];
var area2 = [
  [1, 2],
  [3, 4]
];

function createArea(area) {
  for (i = 0; i < area.length; i++) {
    var row = document.createElement("div")
    for (j = 0; j < area[i].length; j++) {
      var div = document.createElement("div");
      div.classList.add("piece")
      if (i == y && j == x) div.classList.add("selected")
      div.innerHTML = area[i][j];
      row.append(div)
    }
    row.append(document.createElement("br"))
    mainContainer.append(row)
  }
}

function updateArea(area, x, y) {
  document.querySelector(".selected").classList.remove("selected");
  mainContainer.children[y].children[x].classList.add("selected")
}

function clearArea(clearArea) {
  const myNode = clearArea;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

window.addEventListener("keypress", (e) => {
  e = e.key.toLocaleLowerCase();
  if (e == "w") {
    y--;
  } else if (e == "s") {
    y++;
  } else if (e == "a") {
    x--;
  } else if (e == "d") {
    x++;
  }
  x = clamp(x, 0, 7)
  y = clamp(y, 0, 7)

  updateArea(area, x, y)
})

createArea(area)
createArea(area2)

function clamp(num, min, max) {
  return num < min ? min : num > max ? max : num;
}
