var extremeSxWall = (SIMPLEX_GRID([([6,8,6.5]),[0.5,0,0],[3,0,0]]));

var sxWall = T([1])([8])(SIMPLEX_GRID([
  ([2,1.5,1.5]),[0.5,0,0],[3,0,0]]));

var extremeSxFloor = (SIMPLEX_GRID([([3,5,3]),[8,0.5,0],[0.5,0,0]]));

var baseStruct = STRUCT([extremeSxWall,sxWall,extremeSxFloor]);

var extremeDxWall = T([1])([38])(SIMPLEX_GRID([
  ([6.5,9.5]),[0.5,0,0],[3,0,0]
]));