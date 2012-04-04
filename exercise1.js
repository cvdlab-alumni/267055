var contour = POLYLINE([[0,0],[0,8],[5,8],[5,30],[6,30],[6,38],[16,38],[16,43],[18,43],[18,30],[22,30],[22,-1],[20,-1],[20,0],[0,0]]);
var pool = POLYLINE([[20,0],[11,0],[11,19],[20,19],[20,0]]);
var poolWall = POLYLINE([[7,5.5],[7,24.5],[7.2,24.5],[7.2,5.5],[7,5.5]]);

var baseStructure = STRUCT([contour,pool,poolWall]);

var internalsxwall1 = POLYLINE([[5,0],[5,6]]);
var internalsxwall2 = POLYLINE([[5,4],[3,4]]);
var internalsxwall3 = POLYLINE([[0,4],[2,4]]);
var internalsxwall4 = POLYLINE([[1.5,4],[1.5,4.5]]);
var internalsxwall5 = POLYLINE([[1.5,8],[1.5,5.5]]);
var internalsxwall6 = POLYLINE([[0,6],[0.5,6]]);
var roofsx = POLYLINE([[-0.5, -0.5],[-0.5, 8.5],[9.5,8.5], [9.5,-0.5], [-0.5,-0.5]]);
var roomsDivisionAndRoofSx = STRUCT([internalsxwall1,internalsxwall2,internalsxwall3,internalsxwall4,internalsxwall5,internalsxwall6, roofsx]);

var roofdx = POLYLINE([[5,23],[5,38],[18,38],[18,23],[5,23]]);
var internaldxwall1 = POLYLINE([[6,29],[6,42],[17,42],[17,25],[15,25]]);
var internaldxwall2 = POLYLINE([[9.5,26],[15,26]]);
var internaldxwall3 = POLYLINE([[9.5,27],[15,27]]);
var internaldxwall4 = POLYLINE([[15,28],[15,24]]);
var internaldxwall5 = POLYLINE([[15,25],[17,25]]);
var internaldxwall6 = POLYLINE([[17,25],[17,42]]);
var internaldxwall7 = POLYLINE([[6,31],[9.5,31],[9.5,25]]);
var internaldxwall8 = POLYLINE([[15,29],[15,24],[15.2,24],[15.2,29],[15,29]]);
var internaldxwall9 = POLYLINE([[17,35],[11,35],[11,30.5],[11.2,30.5],[11.2,31.5],[17,31.5]]);
var internaldxwall10 = POLYLINE([[11.2,31.5],[11.2,35]]);
var internaldxwall11 = POLYLINE([[15.2,36.5],[9,36.5]]);
var roomsDivisionAndRoofDx = STRUCT([roofdx,internaldxwall1,internaldxwall2,internaldxwall3,internalsxwall5,
	internalsxwall6,internaldxwall7,internaldxwall8,internaldxwall9,internaldxwall10, internaldxwall11]);

DRAW(COLOR(0,0,0)(baseStructure));
DRAW(roomsDivisionAndRoofSx);
DRAW(roomsDivisionAndRoofDx);