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

var createConicalSurface = function(apex, baseCurve, color){
      var curve = CONICAL_SURFACE(apex)(baseCurve);
        var curveMapped = MAP(curve)(domain);
        return curveColored = COLOR(color)(curveMapped);

  }

//Colori
var duraMaterColor = [169/255, 54/255, 41/255];
var arachnoidColor = [220/255, 197/255, 149/255];
var piaMaterColor = [222/255, 154/255, 164/255];
var grayMatterColor = [130/255, 156/255, 120/255];
var closureLevelColor =[237/255,227/255,211/255];

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

var graymatterPoints4 = [[0,1,1.757],[0.2,0.8,1.757],[0.1,1.4,1.757],[0.3,1.5,1.757],[0.5,1.72,1.757],[0.75,1.76,1.757]];
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

//NERVE FIBER TRACTS - with affine trasformation
var nerveControlPoints = [[-0.15,1.85,1.757],[-0.1,1.82,1.757],[-0.15,1.8,1.757]];
var nerveControlPoints2 = [[-0.15,1.8,1.757],[-0.2,1.82,1.757],[-0.15,1.85,1.757]];
var nerveHeight = [0,0,0.5];

var halfNerveFiber1 = createCylSurface(nerveControlPoints, nerveHeight, domain);
var halfNerveFiber2 = createCylSurface(nerveControlPoints2, nerveHeight, domain);

var nerveFiber = COLOR(grayMatterColor)(STRUCT([halfNerveFiber1,halfNerveFiber2]));

var nerveFiber1 = T([0,1])([-0.1,-0.2])(nerveFiber);
var nerveFiber2 = T([1])([-0.2])(nerveFiber);

var nerveFiber3 = T([0,1])([-0.1,-0.1])(nerveFiber);
var nerveFiber4 = T([1])([-0.1])(nerveFiber);

var nerveFiber5 = T([0])([0.1])(nerveFiber);
var nerveFiber6 = T([0,1])([0.1, -0.1])(nerveFiber);
var nerveFiber7 = T([0,1])([0.1, -0.2])(nerveFiber);

var nerveFiberTracts = (STRUCT([nerveFiber, nerveFiber1, nerveFiber2, nerveFiber3,nerveFiber4, nerveFiber5, nerveFiber6, nerveFiber7]));
DRAW(nerveFiberTracts);

//NERVI GROSSI
var spinalNervePoints = [[2,1.4,0.8],[2,1.6,0.9],[2,1.4,1]];
var spinalNervePoints1 = [[2,1.4,1],[2,1.2,0.9],[2,1.4,0.8]];

var spinalQty = 0.4;
var spinalNerveHeight = [spinalQty,0,0];

var curveBaseNerveBack = BEZIER(S0)(spinalNervePoints);
var curveBaseNerveFront = BEZIER(S0)(spinalNervePoints1);

var halfSpinalNerve1Moved = COLOR(grayMatterColor)(createCylSurface(spinalNervePoints, spinalNerveHeight, domain));
var halfSpinalNerve2Moved = COLOR(grayMatterColor)(createCylSurface(spinalNervePoints1, spinalNerveHeight, domain));

var c1 = muovi(spinalNervePoints, true, false, spinalQty);
var c2 = muovi(spinalNervePoints1, true, false, spinalQty);
var Su1Draw = BEZIER(S0)(c1);
var Su2Draw = BEZIER(S0)(c2);
var surfaceNerve = BEZIER(S1)([Su1Draw,Su2Draw]);
var surMappedNerve = COLOR(closureLevelColor)(MAP(surfaceNerve)(domain));

var baseNerve = STRUCT([halfSpinalNerve1Moved, halfSpinalNerve2Moved, surMappedNerve]);

//FIBRE 3D

var topNervePointsBottom1 = [0.73,1.767,1.778];
var topNervePointsBottom2 = [0.72,1.78,1.18];
var topNervePointsBottom3 = [0.72,1.78,1.5];

var fiberBack1 = createConicalSurface(topNervePointsBottom1, curveBaseNerveBack, grayMatterColor);
var fiberBack2 = createConicalSurface(topNervePointsBottom2, curveBaseNerveBack, grayMatterColor);
var fiberBack3 = createConicalSurface(topNervePointsBottom3, curveBaseNerveBack, grayMatterColor);

var fiberBack = STRUCT([fiberBack1, fiberBack2, fiberBack3]);

var topNervePointsFront1 = [0.56,0.268,1.18];
var topNervePointsFront2 = [0.56,0.268,1.768];
var topNervePointsFront3 = [0.56,0.268,1.5];

var fiberFront1 = createConicalSurface(topNervePointsFront1, curveBaseNerveFront, grayMatterColor);
var fiberFront2 = createConicalSurface(topNervePointsFront2, curveBaseNerveFront, grayMatterColor);
var fiberFront3 = createConicalSurface(topNervePointsFront3, curveBaseNerveFront, grayMatterColor);

var fiberFront = STRUCT([fiberFront1, fiberFront2, fiberFront3]);

var fiber = STRUCT([baseNerve, fiberFront, fiberBack]);
DRAW(fiber);

//FIBRE 3D RIBALTATE

var spinalNervePointsR = ribaltaX(spinalNervePoints);
var spinalNervePoints1R = ribaltaX(spinalNervePoints1);

var spinalQtyR = -0.4;
var spinalNerveHeightR = [spinalQtyR,0,0];

var curveBaseNerveBackR = BEZIER(S0)(spinalNervePointsR);
var curveBaseNerveFrontR = BEZIER(S0)(spinalNervePoints1R);

var halfSpinalNerve1MovedR = COLOR(grayMatterColor)(createCylSurface(spinalNervePointsR, spinalNerveHeightR, domain));
var halfSpinalNerve2MovedR = COLOR(grayMatterColor)(createCylSurface(spinalNervePoints1R, spinalNerveHeightR, domain));

var c1R = muovi(spinalNervePointsR, true, false, spinalQtyR);
var c2R = muovi(spinalNervePoints1R, true, false, spinalQtyR);
var Su1RDraw = BEZIER(S0)(c1R);
var Su2RDraw = BEZIER(S0)(c2R);
var surfaceNerveR = BEZIER(S1)([Su1RDraw,Su2RDraw]);
var surMappedNerveR = COLOR(closureLevelColor)(MAP(surfaceNerveR)(domain));

var baseNerveR = STRUCT([halfSpinalNerve1MovedR, halfSpinalNerve2MovedR, surMappedNerveR]);

var topNervePointsBottom4 = [-0.73,1.767,1.778];
var topNervePointsBottom5 = [-0.72,1.78,1.18];
var topNervePointsBottom6 = [-0.72,1.78,1.5];

var fiberBack4 = createConicalSurface(topNervePointsBottom4, curveBaseNerveBackR, grayMatterColor);
var fiberBack5 = createConicalSurface(topNervePointsBottom5, curveBaseNerveBackR, grayMatterColor);
var fiberBack6 = createConicalSurface(topNervePointsBottom6, curveBaseNerveBackR, grayMatterColor);

var fiberBackR = STRUCT([fiberBack4, fiberBack5, fiberBack6]);

var topNervePointsFront4 = [-0.56,0.268,1.18];
var topNervePointsFront5 = [-0.56,0.268,1.768];
var topNervePointsFront6 = [-0.56,0.268,1.5];

var fiberFront4 = createConicalSurface(topNervePointsFront4, curveBaseNerveFrontR, grayMatterColor);
var fiberFront5 = createConicalSurface(topNervePointsFront5, curveBaseNerveFrontR, grayMatterColor);
var fiberFront6 = createConicalSurface(topNervePointsFront6, curveBaseNerveFrontR, grayMatterColor);

var fiberFrontR = STRUCT([fiberFront4, fiberFront5, fiberFront6]);

var fiberR = STRUCT([baseNerveR, fiberFrontR, fiberBackR]);
DRAW(fiberR);