var domain = DOMAIN([[0,1],[0,1]])([30,50]);

var traslaPoints = function (point, zTranslation)  {
  return point.map(function (p){
		return [p[0], p[1], p[2] + zTranslation];
	});
}

var scala = function (point, factor)  {
  return point.map(function (p){
		return [p[0]*factor, p[1]*factor, p[2]];
	});
}
var p0 = [[2,1,0],[0,1,0],[0,-0.5,0], [2,0,0], [2,1,0]];
var p1 = scala(traslaPoints(p0,1), 0.8);
var p2 = scala(traslaPoints(p0,2), 0.5);

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);

var ala = BEZIER(S1)([c0,c1,c2]);
var surfAla = MAP(ala)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfAla));