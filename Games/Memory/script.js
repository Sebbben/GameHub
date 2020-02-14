var mainTable = document.getElementById("main-table");
var cards = ["1", "2", "3", "4", "5", "6", "7", "8"];
var rand1, rand2;
var guesses = 1;
var currentGuess;
var lastObj;
var hasControl = false;

// Initialisation

for (i = 0; i < cards.length; i++) {
  for (j = 0; j < 2; j++) {
    displayTekst(i);
  }
}
hasControl = true;

function displayTekst(num) {
  rand1 = Math.floor(Math.random() * 4);
  rand2 = Math.floor(Math.random() * 4);
  if (mainTable.children[0].children[rand1].children[rand2].innerText === "") {
    mainTable.children[0].children[rand1].children[rand2].innerText = num;
  } else {
    displayTekst(num);
  }
}

// Main function

function uncover(obj) {
  // makes sure you cant't make moves too fast
  if (hasControl) {
    hasControl = false;
    // make sure you can't just click the same card twice
    obj.removeAttribute("onclick");
    //makes the text in the cards apeare
    obj.classList.remove("hide");
    //checks if you have chosen two cards
    if (guesses == 2) {
      guesses = 1;
      //checks if you got a mach
      if (obj.innerHTML == lastObj.innerHTML) {
        obj.style.backgroundColor = "grey";
        lastObj.style.backgroundColor = "grey";
        cards.splice(cards.indexOf(obj.innerHTML), 1);
        console.log(cards);
        if (cards.length == 0) {
          document.body.innerHTML = "";
          win();
        }
        hasControl = true;
        return;
      } else {
        // if not maching, turn the cards
        setTimeout(() => {
          obj.classList.add("hide");
          lastObj.classList.add("hide");
          obj.setAttribute("onclick", "uncover(this)");
          lastObj.setAttribute("onclick", "uncover(this)");
          lastObj = null;
          hasControl = true;
        }, 1000);
      }
    } else {
      // if not two cards is chosen move on
      guesses++;
      lastObj = obj;
      hasControl = true;
    }
  }
}

function win() {
  document.body.style.backgroundColor = "limegreen";
  var h1 = document.createElement("h1");
  h1.innerHTML = "You win";
  h1.classList.add("win");
  document.body.append(h1);
}
