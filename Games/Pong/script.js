var WIDTH = 700,
  HEIGHT = 600,
  pi = Math.pi;
var canvas, ctx, keystate;
var player, ai, ball;

player = {
  x: null,
  y: null,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
ai = {
  x: null,
  y: null,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
ball = {
  x: null,
  y: null,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

function main() {
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  init();

  var loop = function() {
    update();
    draw();

    window.requestAnimationFrame(loop, canvas);
  };
  window.requestAnimationFrame(loop, canvas);
}

init();

update();

draw();

main();
