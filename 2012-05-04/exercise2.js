var domain = DOMAIN([[0,1],[0,1]])([30,50]);
var interval = INTERVALS(1)(30);

var ribaltaY = function (point)  {
  return point.map(function (p){
    	var p1 = -p[1];
		return [p[0], p1, p[2]];
	});
}

var controlPoints = [[0,0,0],[0,1.5,0],[4,1.5,0],[7,0,0]]

var c1 = BEZIER(S0)(controlPoints);
var curve1 = MAP(c1)(interval);
DRAW(curve1);


var c2 = BEZIER(S0)(ribaltaY(controlPoints));
var curve2 = MAP(c2)(interval);
DRAW(curve2);