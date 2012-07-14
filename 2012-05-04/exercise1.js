var domain = DOMAIN([[0,1],[0,1]])([30,50]);

var traslaPoints = function (point, xTranslation,yTranslation,zTranslation)  {
  return point.map(function (p){
		return [p[0] + xTranslation, p[1] + yTranslation, p[2] + zTranslation];
	});
}

var scala = function (point, scaleFactor)  {
  return point.map(function (p){
		return [p[0]*scaleFactor, p[1]*scaleFactor, p[2]];
	});
}

var points = [[0, 0, 0], [0.6, -2, 0], [-0.75, -2, 0], [0, -1, 0], [-1.3, 0, 0], [-1.3, 0.6, 0], [0.6, 0.6, 0], [0.6, 0, 0]];


var allBezier = function(points){
	var bezier = [ ];
	points.forEach( function(p){
		DRAW(BEZIER(S0)(p));
		bezier.push(BEZIER(S0)(p));

	});
	return bezier;
}

var fusage = BEZIER(S1)(allBezier(points));
var surfFuse = MAP(fusage)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfFuse));
