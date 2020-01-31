function makePath() {
  path = [[0, 0]];
  for (i = 0; i < 7; i++) {
    var randDist = Math.ceil(Math.random() * 3);
    path.push([path[path.length - 1][1] + randDist, path[path.length - 1][0]]);
  }
}
