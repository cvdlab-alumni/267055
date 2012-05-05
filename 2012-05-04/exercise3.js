var interval = INTERVALS(1)(30);
var controlPoints = [[0,2,0],[2,2,0], [4,4,0], [6,8,0], [8,7,0],[8,5,0]];

var c1 = BEZIER(S0)(controlPoints);
var curve1 = MAP(c1)(interval);
DRAW(curve1);

var p1 = POLYLINE([[8,5,0], [8,2,0]]);
DRAW(p1);