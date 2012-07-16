var domain = DOMAIN([[0,1],[0,1]])([30,50]);

<<<<<<< HEAD
var traslaPoints = function (point, xTranslation,yTranslation,zTranslation)  {
  return point.map(function (p){
		return [p[0] + xTranslation, p[1] + yTranslation, p[2] + zTranslation];
=======
var traslaPoints = function (point, zTranslation)  {
  return point.map(function (p){
		return [p[0], p[1], p[2] + zTranslation];
>>>>>>> f3f0a9e622c3a8397c161ad30d8d4c4da39f0d96
	});
}

var scala = function (point, scaleFactor)  {
  return point.map(function (p){
		return [p[0]*scaleFactor, p[1]*scaleFactor, p[2]];
	});
}
<<<<<<< HEAD

var points = [[0, 0, 0], [0.6, -2, 0], [-0.75, -2, 0], [0, -1, 0], [-1.3, 0, 0], [-1.3, 0.6, 0], [0.6, 0.6, 0], [0.6, 0, 0]];

=======
var p0 = [[2,1,0],[0,1,0],[0,-0.5,0], [2,0,0], [2,1,0]];
var p1 = scala(traslaPoints(p0,1), 0.8);
var p2 = scala(traslaPoints(p0,2), 0.5);

var points = [p0, p1,p2];
>>>>>>> f3f0a9e622c3a8397c161ad30d8d4c4da39f0d96

var allBezier = function(points){
	var bezier = [ ];
	points.forEach( function(p){
<<<<<<< HEAD
		DRAW(BEZIER(S0)(p));
		bezier.push(BEZIER(S0)(p));

=======
		bezier.push(BEZIER(S0)(p));
>>>>>>> f3f0a9e622c3a8397c161ad30d8d4c4da39f0d96
	});
	return bezier;
}

<<<<<<< HEAD
var fusage = BEZIER(S1)(allBezier(points));
var surfFuse = MAP(fusage)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfFuse));
=======
var ala = BEZIER(S1)(allBezier(points));
var surfAla = MAP(ala)(domain);
DRAW(COLOR([255/255,204/255,0/255])(surfAla));
>>>>>>> f3f0a9e622c3a8397c161ad30d8d4c4da39f0d96
