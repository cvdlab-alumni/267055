
  var vgrass = CUBOID ([45, 100, 0.2]);
	var hgrass1 = T([1])([100])(CUBOID([100, 45, 0.2]));
	var hgrass2 = T([0,1])([-100,100])(CUBOID([100, 45, 0.2]));
	var hgrass =STRUCT([hgrass1,hgrass2]);
	DRAW(vgrass);
	DRAW(hgrass);