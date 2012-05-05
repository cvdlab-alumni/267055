var domain = DOMAIN([[0,1],[0,1]])([30,50]);
var interval = INTERVALS(1)(30);

var ribaltaY = function (point)  {
  return point.map(function (p){
  		var p1 = -p[1];
		return [p[0], p1, p[2]];
	});
}

var ribaltaz = function (point)  {
  return point.map(function (p){
  		var p2 = -p[2];
		return [p[0], p[1], p2];
	});
}

var controlPoints = [[0,0,0],[0,1,0],[1.5,1,0],[7,0,0]]

var c1 = BEZIER(S0)(controlPoints);
var curve1 = MAP(c1)(interval);

var c2 = BEZIER(S0)(ribaltaY(controlPoints));
var curve2 = MAP(c2)(interval);

var s1 = BEZIER(S1)([c1,c2]);
var sur1 = MAP(s1)(domain);

var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var controls1 = [[0,0,0],[1,0,0.8],[3.5,0,0.8],[4.5,0,0.8],[6.5,0,0]];
var knots1 = [0,0,0,1,2,3,3,3];
var c3 = NUBS(S0)(2)(knots1)(controls1);
var curve3 = MAP(c3)(domain1);

var s13 = BEZIER(S1)([c1,c3]); 
var surface13 = MAP(s13)(domain);

var s23 = BEZIER(S1)([c2,c3]); 
var surface23 = MAP(s23)(domain);
var upSurface = STRUCT([surface13,surface23]);

var c4 = NUBS(S0)(2)(knots1)(ribaltaz(controls1));
var curve4 = MAP(c4)(domain1);

var s14 = BEZIER(S1)([c1,c4]); 
var surface14 = MAP(s14)(domain);

var s24 = BEZIER(S1)([c2,c4]); 
var surface24 = MAP(s24)(domain);

var downSurface = STRUCT([surface14,surface24]);

var struct = STRUCT([upSurface,downSurface]);
DRAW(COLOR([255/255,204/255,0/255])(struct));