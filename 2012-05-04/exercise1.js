var domain = DOMAIN([[0,1],[0,1]])([30,50]);

var traslaPoints = function (point, zTranslation)  {
  return point.map(function (p){
		return [p[0], p[1], p[2] + zTranslation];
	});
}

var p0 = [[8,5,0],[0,5,0],[0,-1,0], [5,3,0], [8,5,0]];
var p1 = traslaPoints(p0,5);
var p2 = traslaPoints(p0,10);

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);

var ala = BEZIER(S1)([c0,c1,c2]);
var surfAla = MAP(ala)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfAla));