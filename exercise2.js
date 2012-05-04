var extremeSxWall = (SIMPLEX_GRID([([6,8,6.5]),[0.5,0,0],[3,0,0]]));
DRAW(extremeSxWall);

var sxWall = T([1])([8])(SIMPLEX_GRID([([0,5.5,1.5]),[0.5,0,0],[3,0,0]]));

var extremeSxFloor = (SIMPLEX_GRID([([3,5,3]),[8,0.5,0],[0.5,0,0]]));
var extremeSxRoof = T([1,2])([0.5,2.5])(extremeSxFloor);
var extremeSxbackWall = SIMPLEX_GRID([[0.5],[0,8],[3]]);

var baseStruct = STRUCT([extremeSxWall,sxWall,extremeSxFloor,extremeSxRoof, extremeSxbackWall]);
DRAW(baseStruct);

var big_pool = STRUCT([T([0,0])([1,10])(SIMPLEX_GRID([[8],[15],[0.2]]))]);
DRAW(COLOR(0.2,0,0.4,0.8)(big_pool));

var backFloor = T([0,1])([7,7])(SIMPLEX_GRID([[4],[4,15],[0.5]]));
DRAW(backFloor);
