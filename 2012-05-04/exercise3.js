var interval = INTERVALS(1)(30);
var domain = DOMAIN([[0,1],[0,1]])([30,50]);

var controlPoints = [[0,1,0],[1,1,0], [2,2,0],[3,4,0],[4,3.5,0],[4,2.5,0]];

var c1 = BEZIER(S0)(controlPoints);
var curve1 = MAP(c1)(interval);
DRAW(curve1);

var p1 = [[4,2.5,0], [4,1,0]];
var line1 = POLYLINE(p1);
DRAW(line1);

var trasla = function (point, trasla)  {
  return point.map(function (p){
		return [p[0], p[1], p[2]+trasla];
	});
}

var c2 = BEZIER(S0)(trasla(controlPoints, 0.2));
var curve2 = MAP(c2)(interval);
DRAW(curve2);

var p2 = trasla(p1,0.2);
var line2 = POLYLINE(p2);
DRAW(line2);

var surf = BEZIER(S2)([c1,c2,[0,0,4], [0,0,-4]]);
var s1 = MAP(surf)(domain);
var verticalStabilizer = STRUCT([c1,p1,c2,p2]);
DRAW(verticalStabilizer);

var point = [[0,1,0],[0,1,0.2],[0,2,0],[0,0,0.2]];
var c3 = CUBIC_HERMITE(S0)(point);
var curv3 = MAP(c3)(interval);
DRAW(curv3);

var point = [[4,2.5,0],[4,2.5,0.2],[4,3.5,0],[4,3.5,0.2]];
var c4 = CUBIC_HERMITE(S0)(point);
var curv4 = MAP(c4)(interval);
DRAW(curv4);


//Horizontal Stabilizer

var point = [[0,1,3],[0,0,4],[0,1,4],[4,1,2]];
var c3 = CUBIC_HERMITE(S0)(point);
var curv3 = MAP(c3)(interval);
DRAW(curv3);

var p3 = [[0,1,-3], [0,1,3]];
var line3 = POLYLINE(p3);
DRAW(line3);