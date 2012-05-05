
var vStreet = CUBOID ([50, 100, 0.2]);
var hStreet1 = T([1])([100])(CUBOID([100, 50, 0.2]));
var hStreet2 = T([0,1])([-60,100])(CUBOID([70, 50, 0.2]));
var vContinuosLine1 = COLOR([255/255,204/255,0/255])(T([0])([3])(CUBOID ([4, 100, 0.2])));
var street = COLOR([0.3,0.3,0.3])(STRUCT([vStreet,hStreet1,hStreet2]));
var streetWithLine = STRUCT([street,vContinuosLine1]);
DRAW(street);

var vgrass1 = T([0])([-10])(CUBOID ([10, 100, 0.2]));
var vgrass2 = T([0])([50])(CUBOID ([10, 100, 0.2]));
var hgrass1 = T([0,1])([60,90])(CUBOID([40, 10, 0.2]));
var hgrass2 = T([0,1])([-60,90])(CUBOID([90, 10, 0.2]));
var hgrass3 = T([0,1])([-60,150])(CUBOID([160, 10, 0.2]));
var grass = COLOR([0/255, 100/255, 0/255])(STRUCT([vgrass1,vgrass2,hgrass1,hgrass2,hgrass3]));
DRAW(grass);