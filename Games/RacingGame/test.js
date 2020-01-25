function makePath() {
  var path = [
    [0, 0]
  ];
  var pathX = 0;
  var pathY = 0;
  while (path.length < 7) {
    var randDir = Math.ceil(Math.random() * 2)
    var randDist = Math.ceil(Math.random() * 5)
    switch (randDir) {
      case 1:
        pathX = Math.min(pathX + randDist, 7);
        break;
      case 2:
        pathY = Math.min(pathY + randDist, 7);
        break;
      default:
        break;
    }
    path.push([pathX, pathY])
    for (i in path) {
      if ([pathX, pathY] == path[i])
        path.pop();
      console.log("test")
    }
  }
  console.log(path)
}
