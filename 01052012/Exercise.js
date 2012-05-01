//ESERCIZIO 1

var labirint1 = POLYLINE([[0,0],[0,4.5]]);
var labirint3 = POLYLINE([[0,0],[1.5,0]]);
var labirint6 = POLYLINE([[0,4.5],[1.5,4.5]]);
var labWall1 = POLYLINE([[1.5,0],[1.5,0.5],[0.5,0.5],[0.5, 2],[1.5,2],[1.5,2.5],[0.5,2.5],[0.5,4],[1.5,4],[1.5,4.5]]);


var labirint2 = POLYLINE([[2,0],[3.5,0]]);
var labirint4 = POLYLINE([[3.5,0], [3.5,4.5]]);
var labirint5 = POLYLINE([[3.5,4.5], [2,4.5]]);
var labWall2 = POLYLINE([[2,0],[2,0.5],[3,0.5],[3,2],[2,2],[2,2.5],[3,2.5],[3,4],[2,4],[2,4.5]]);


var up = STRUCT([labirint1,labirint3,labirint6, labWall1]);
DRAW(up);


var down = STRUCT([labirint2,labirint4,labirint5, labWall2]);
DRAW(down);


var upWall = (EXTRUDE([2]))(up);
var upWallColored = COLOR([0.2,0.5,0.5,1])(upWall);
DRAW(upWallColored);


var downWall = (EXTRUDE([2]))(down);
var downWallColored = COLOR([0.2,0.5,0.5,1])(downWall);
DRAW(downWallColored);

//ESERCIZIO 2


var roof = (BOUNDARY(CUBOID([3.5,4.5,0.5])));
var heightRoof = T([2])([2])(roof);
var coloredRoof = COLOR([0,1,0,0.5])(heightRoof);

DRAW(coloredRoof);


//ESERCIZIO 3

var domain = INTERVALS(1)(30);
var controlPoints = [[1,0],[1,1],[1,0],[1,1]];
var hermiteCubicalCurve = CUBIC_HERMITE(S0)(controlPoints);
var curve = MAP(hermiteCubicalCurve)(domain);
DRAW(curve);