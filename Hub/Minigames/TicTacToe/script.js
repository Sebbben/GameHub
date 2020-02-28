function getWinner() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");
    

    // get all posibilities
    if (box1.innerHTML !== "" && box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML) {
        selectWinnerBoxes(box1,box2,box3); //upper
    } else if (box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML) {
        selectWinnerBoxes(box4,box5,box6); //middle
    } else if (box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box7,box8,box9); //bottom
    } else if (box1.innerHTML !== "" && box1.innerHTML == box3.innerHTML && box1.innerHTML == box7.innerHTML) {
        selectWinnerBoxes(box1,box4,box7); //left
    } else if (box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        selectWinnerBoxes(box2,box5,box8); //middle
    } else if (box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box3,box6,box9); //right
    } else if (box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        selectWinnerBoxes(box1,box5,box9); //diagonal left right
    } else if (box3.innerHTML !== "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        selectWinnerBoxes(box3,box5,box7); //diagonal right left
    }
}

// set event onclick
// boxes => all boxes
// X_OR_O => to set X or O into the box
var boxes = document.querySelectorAll("#main div"), x_or_o = 0;
var turn = document.getElementById("turn");

for(var i=0;i<boxes.length;i++) {
    boxes[i].onclick = function() {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (x_or_o%2 === 0) {
                this.innerHTML = "X";
                getWinner()
                turn.innerHTML = "O turn now"
                x_or_o += 1;
            } else {
                this.innerHTML = "O";
                getWinner()
                turn.innerHTML = "X turn now"
                x_or_o += 1; 
            }
        }
    }
}

function replay() {

}

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
}