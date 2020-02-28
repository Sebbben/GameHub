const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ball = {
  x: 300,
  y: 300,
  speed: 3,
  dir: 0,
  update: function() {
    this.x += Math.sin(this.dir);
    this.y += Math.sin(90 - this.dir);
    if (this.x < 0) {
    }
  },
  draw: function() {
    ctx.fillRect(this.x, this.y, 5, 5);
  }
};

var player = {
  x: canvas.width - 10,
  y: canvas.width / 2,
  speed: 5,
  update: function() {},
  draw: function() {
    ctx.fillstyle = "grey";
    ctx.fillRect(this.x, this.y, 10, 70);
  }
};

function draw() {
  ctx.canvas.width = window.innerHeight;
  ctx.canvas.heigth = window.innerHeight;

  player.draw();
  ball.draw();
}

function update() {
  player.update();
  ball.update();
}

function main() {
  update();
  draw();
}
setInterval(main, 10);
