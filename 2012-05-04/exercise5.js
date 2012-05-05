
var vgrass = CUBOID ([45, 100, 0.2]);
var hgrass1 = T([1])([100])(CUBOID([100, 45, 0.2]));
var hgrass2 = T([0,1])([-100,100])(CUBOID([100, 45, 0.2]));
var grass = COLOR([0/255, 100/255, 0/255])(STRUCT([hgrass1,hgrass2,vgrass]));
DRAW(grass);