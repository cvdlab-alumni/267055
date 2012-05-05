var domain = DOMAIN([[0,1],[0,1]])([30,50]);

var traslaPoints = function (point, zTranslation)  {
  return point.map(function (p){
		return [p[0], p[1], p[2] + zTranslation];
	});
}

var scala = function (point, scaleFactor)  {
  return point.map(function (p){
		return [p[0]*scaleFactor, p[1]*scaleFactor, p[2]];
	});
}
var p0 = [[2,1,0],[0,1,0],[0,-0.5,0], [2,0,0], [2,1,0]];
var p1 = scala(traslaPoints(p0,1), 0.8);
var p2 = scala(traslaPoints(p0,2), 0.5);

var points = [p0, p1,p2];

var allBezier = function(points){
	var bezier = [ ];
	points.forEach( function(p){
		bezier.push(BEZIER(S0)(p));
	});
	return bezier;
}

var ala = BEZIER(S1)(allBezier(points));
var surfAla = MAP(ala)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfAla));