var ribaltaX = function (point)  {
  return point.map(function (p){
  		var p0 = -p[0];
		return [p0, p[1], p[2]];
	});
}

var muovi = function (point, isForX, isForY, qty)  {
  return point.map(function (p){
  		var p0 = p[0];
  		if(isForX){
  			p0 = p0 + qty;
  		}

  		var p1 = p[1];
  		if(isForY){
  			p1 = p1 + qty;
  		}

		return [p0, p1, p[2]];
	});
}

var createCylSurface = function (controlPoints, height, domain){
	var curve = BEZIER(S0)(controlPoints);
	return MAP(CYLINDRICAL_SURFACE(curve)(height))(domain);
}

//Colori
var duraMaterColor = [169/255, 54/255, 41/255];
var arachnoidColor = [220/255, 197/255, 149/255];
var piaMaterColor = [222/255, 154/255, 164/255];
var grayMatterColor = [130/255, 156/255, 120/255];
var closureLevelColor =[182/255,178/255,166/255];
var closureNerve =[237/255,227/255,211/255];

//Domini per le curve e le superfici
var interval = INTERVALS(1)(50);
var domain = DOMAIN([[0,1],[0,1]])([50,50]);

//Curva Inferiore
var controlPoints1 = [[1,0,0],[2,0.5,0],[2,2.5,0],[0,2.5,0]];
var controlPoints2 = [[1,0,0],[1,-0.4,0],[0.1,-0.4,0],[0,0,0]];

var su1 = BEZIER(S0)(controlPoints1);
var su2 = BEZIER(S0)(controlPoints2);

var controlPoints1Ribalta = ribaltaX(controlPoints1);
var controlPoints2Ribalta = ribaltaX(controlPoints2);

var su1ribaltata = BEZIER(S0)(controlPoints1Ribalta);
var su2ribaltata = BEZIER(S0)(controlPoints2Ribalta);

//Superficie di chiusura inferiore
var baseSurface1 = BEZIER(S1)([su1,su2]);
var baseSurfaceMapped1 = MAP(baseSurface1)(domain);

var baseSurface2 = BEZIER(S1)([su1ribaltata,su2ribaltata]);
var baseSurfaceMapped2 = MAP(baseSurface2)(domain);

var baseSurface = COLOR(duraMaterColor)(STRUCT([baseSurfaceMapped1,baseSurfaceMapped2]));
var baseSurfaceScaled = S([0,1])([0.9,0.97])(baseSurface);
DRAW(baseSurfaceScaled);

//Curva Superiore
var duraMaterHeight = [0,0,0.5];

var surface1 = createCylSurface(controlPoints1, duraMaterHeight, domain);
var surface2 = createCylSurface(controlPoints2, duraMaterHeight, domain);
var surface1Rib = createCylSurface(controlPoints1Ribalta, duraMaterHeight, domain);
var surface2Rib = createCylSurface(controlPoints2Ribalta,  duraMaterHeight, domain);

var duraMaterSur = COLOR(duraMaterColor)(STRUCT([surface1,surface2,surface1Rib,surface2Rib]));
var duraMAterTS = S([0,1])([0.9,0.97])(duraMaterSur);
DRAW(duraMAterTS);

//Sezione Arachnoid
var arachnoidContour = COLOR(arachnoidColor)(T([1])([0.15])(S([0,1,2])([0.85,0.85,1.5])(duraMaterSur)));
DRAW(arachnoidContour); 
//Sezione PiaMater
var scaleSurface2 = COLOR(piaMaterColor)(T([1])([0.15])(S([0,1,2])([0.85,0.85,1.3])(arachnoidContour)));
DRAW(scaleSurface2); 
//Sezione WhiteMatter
var scaleSurface3 = COLOR(arachnoidColor)(T([1])([0.1])(S([0,1,2])([0.9,0.9,1.8])(scaleSurface2)));
DRAW(scaleSurface3); 

//Chiusura livelli
//Ultimo livello (White matter)
var scaleTopSurface = T ([1,2])([0.35,1.755])(S([0,1])([0.65,0.65])(baseSurface));
var coloredSurface = COLOR(arachnoidColor)(scaleTopSurface);
DRAW(coloredSurface); 

//Livello rosa (Pia Mater)
var scaleLevel2Surface = T([1,2])([0.27,0.975])(S([0,1])([0.72,0.725])(baseSurface));
var piaMaterSurface = COLOR(closureLevelColor)(scaleLevel2Surface);
DRAW(piaMaterSurface); 

//Livello Arachnoid
var scaleArachnoidSurfaceSurface = T([1,2])([0.15,0.75])(S ([0,1])([0.85,0.85])(baseSurface));
var arachnoidSurface = COLOR(closureLevelColor)(scaleArachnoidSurfaceSurface);
DRAW(arachnoidSurface); 

//Livello Dura Mater
var duraMaterSurfaceColor = T([2])([0.5])(COLOR(closureLevelColor)(baseSurfaceScaled));
DRAW(duraMaterSurfaceColor); 

//GRAY MATTER
var graymatterPoints = [[0,0.7,1.757],[0.3,0.8,1.757],[0.4,0.2,1.757],[0.5,0.8,1.757]];
var grayMatterCurve1 = BEZIER(S0)(graymatterPoints);

var graymatterPoints2 = [[0.5,0.8,1.757],[0.9,1,1.757],[0.5,1.3,1.757]];
var grayMatterCurve2 = BEZIER(S0)(graymatterPoints2);

var graymatterPoints3 = [[0.5,1.3,1.757],[0.7,1.45,1.757],[0.65,1.5,1.757],[0.8,1.78,1.757]];
var grayMatterCurve3 = BEZIER(S0)(graymatterPoints3);

var graymatterPoints4 = [[0,1,1.757],[0.2,0.8,1.757],[0.1,1.4,1.757],[0.3,1.5,1.757],[0.5,1.72,1.757],[0.75,1.8,1.757]];
var grayMatterCurve4 = BEZIER(S0)(graymatterPoints4);

var graymatter1ribaltata = BEZIER(S0)(ribaltaX(graymatterPoints));
var graymatter2ribaltata = BEZIER(S0)(ribaltaX(graymatterPoints2));
var graymatter3ribaltata = BEZIER(S0)(ribaltaX(graymatterPoints3));
var graymatter4ribaltata = BEZIER(S0)(ribaltaX(graymatterPoints4));

//GRAY MATTER SURFACE
var graySur1 = BEZIER(S1)([grayMatterCurve1,grayMatterCurve2]);
var graySurMapped1 = COLOR(grayMatterColor)(MAP(graySur1)(domain));

var graySur2 = BEZIER(S1)([grayMatterCurve1,grayMatterCurve4]);
var graySurMapped2 = COLOR(grayMatterColor)(MAP(graySur2)(domain));
var topSurface = STRUCT([graySurMapped1,graySurMapped2]);

var graySur1R = BEZIER(S1)([graymatter1ribaltata,graymatter2ribaltata]);
var graySurMapped1R = COLOR(grayMatterColor)(MAP(graySur1R)(domain));

var graySur2R = BEZIER(S1)([graymatter1ribaltata,graymatter4ribaltata]);
var graySurMapped2R = COLOR(grayMatterColor)(MAP(graySur2R)(domain));
var topSurfaceR = STRUCT([graySurMapped1R,graySurMapped2R]);

var topWithGrayMatterSurface = STRUCT([topSurface,topSurfaceR]);
DRAW(topWithGrayMatterSurface);

//NERVE FIBER TRACTS
var nerveControlPoints = [[-0.15,1.85,1.757],[-0.1,1.82,1.757],[-0.15,1.8,1.757]];
var nerveControlPoints2 = [[-0.15,1.8,1.757],[-0.2,1.82,1.757],[-0.15,1.85,1.757]];
var nerveHeight = [0,0,0.7];

var halfNerveFiber1 = createCylSurface(nerveControlPoints, nerveHeight, domain);
var halfNerveFiber2 = createCylSurface(nerveControlPoints2, nerveHeight, domain);

var nerveFiber = COLOR(grayMatterColor)(STRUCT([halfNerveFiber1,halfNerveFiber2]));
DRAW(nerveFiber);

var nerveControlPointsMoved1 = muovi(nerveControlPoints,true, true,-0.1);
var nerveControlPointsMoved2 = muovi(nerveControlPoints2,true, true,-0.1);

var halfNerveFiber1Moved = createCylSurface(nerveControlPointsMoved1, nerveHeight, domain);
var halfNerveFiber2Moved = createCylSurface(nerveControlPointsMoved2, nerveHeight, domain);

var nerveFiberMoved1 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber1Moved,halfNerveFiber2Moved]));
DRAW(nerveFiberMoved1);

var nerveControlPointsMoved3 = muovi(nerveControlPointsMoved1,false,true,-0.08);
var nerveControlPointsMoved4 = muovi(nerveControlPointsMoved2,false,true,-0.08);

var halfNerveFiber3Moved = createCylSurface(nerveControlPointsMoved3, nerveHeight, domain);
var halfNerveFiber4Moved = createCylSurface(nerveControlPointsMoved4, nerveHeight, domain);

var nerveFiberMoved2 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber3Moved,halfNerveFiber4Moved]));
DRAW(nerveFiberMoved2);

var nerveControlPointsMoved5 = muovi(nerveControlPoints,false,true,-0.1);
var nerveControlPointsMoved6 = muovi(nerveControlPoints2,false,true,-0.1);

var halfNerveFiber5Moved = createCylSurface(nerveControlPointsMoved5, nerveHeight, domain);
var halfNerveFiber6Moved = createCylSurface(nerveControlPointsMoved6, nerveHeight, domain);

var nerveFiberMoved3 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber5Moved,halfNerveFiber6Moved]));
DRAW(nerveFiberMoved3);

var nerveControlPointsMoved7 = muovi(nerveControlPoints,false,true,-0.2);
var nerveControlPointsMoved8 = muovi(nerveControlPoints2,false,true,-0.2);

var halfNerveFiber7Moved = createCylSurface(nerveControlPointsMoved7, nerveHeight, domain);
var halfNerveFiber8Moved = createCylSurface(nerveControlPointsMoved8, nerveHeight, domain);

var nerveFiberMoved4 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber7Moved,halfNerveFiber8Moved]));
DRAW(nerveFiberMoved4);

var nerveControlPointsMoved9 = muovi(nerveControlPoints,true,false,0.08);
var nerveControlPointsMoved10 = muovi(nerveControlPoints2,true,false,0.08);

var halfNerveFiber9Moved = createCylSurface(nerveControlPointsMoved9, nerveHeight, domain);
var halfNerveFiber10Moved = createCylSurface(nerveControlPointsMoved10, nerveHeight, domain);

var nerveFiberMoved5 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber9Moved,halfNerveFiber10Moved]));
DRAW(nerveFiberMoved5);

var nerveControlPointsMoved11 = muovi(nerveControlPointsMoved9,false,true,-0.1);
var nerveControlPointsMoved12 = muovi(nerveControlPointsMoved10,false,true,-0.1);

var halfNerveFiber11Moved = createCylSurface(nerveControlPointsMoved11, nerveHeight, domain);
var halfNerveFiber12Moved = createCylSurface(nerveControlPointsMoved12, nerveHeight, domain);

var nerveFiberMoved6 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber11Moved,halfNerveFiber12Moved]));
DRAW(nerveFiberMoved6);

var nerveControlPointsMoved13 = muovi(nerveControlPointsMoved11,false,true,-0.1);
var nerveControlPointsMoved14 = muovi(nerveControlPointsMoved12,false,true,-0.1);

var halfNerveFiber13Moved = createCylSurface(nerveControlPointsMoved13, nerveHeight, domain);
var halfNerveFiber14Moved = createCylSurface(nerveControlPointsMoved14, nerveHeight, domain);

var nerveFiberMoved7 = COLOR(grayMatterColor)(STRUCT([halfNerveFiber13Moved,halfNerveFiber14Moved]));
DRAW(nerveFiberMoved7);

//NERVI GROSSI
var spinalNervePoints = [[2,1.7,0.8],[2,1.9,0.9],[2,1.7,1]];
var spinalNervePoints1 = [[2,1.7,1],[2,1.5,0.9],[2,1.7,0.8]];

var spinalQty = 0.4;
var spinalNerveHeight = [spinalQty,0,0];

var halfSpinalNerve1Moved = createCylSurface(spinalNervePoints, spinalNerveHeight, domain);
DRAW(COLOR(grayMatterColor)(halfSpinalNerve1Moved));

var halfSpinalNerve2Moved = createCylSurface(spinalNervePoints1, spinalNerveHeight, domain);
DRAW(COLOR(grayMatterColor)(halfSpinalNerve2Moved));

var c1 = muovi(spinalNervePoints, true, false, spinalQty);
var c2 = muovi(spinalNervePoints1, true, false, spinalQty);
var Su1Draw = BEZIER(S0)(c1);
var Su2Draw = BEZIER(S0)(c2);
var surfaceNerve = BEZIER(S1)([Su1Draw,Su2Draw]);
var surMappedNerve = MAP(surfaceNerve)(domain);
DRAW(COLOR(closureNerve)(surMappedNerve));

//FIBRE POSTERIORI
var spinalNervePoints2 = [[2,1.7,1],[1.5,1.7,0.8],[1.2,1.8,1.5],[0.72,1.78,1.76]];
var spinalNervePoints2Bottom = [[2,1.7,0.8],[1.5,1.7,0.6],
[1.2,1.8,1.05],[0.72,1.78,1.18]];

var nerve = BEZIER(S0)(spinalNervePoints2);
var nerveMap = COLOR(grayMatterColor)(MAP(nerve)(interval));
DRAW(nerveMap);

var nerveBottom = BEZIER(S0)(spinalNervePoints2Bottom);
var nerveMapBottom = COLOR(grayMatterColor)(MAP(nerveBottom)(interval));
DRAW(nerveMapBottom);

//FIBRE ANTERIORI

