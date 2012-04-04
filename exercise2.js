var extremeSxWall = (SIMPLEX_GRID([([6,8,6.5]),[0.5,0,0],[3,0,0]]));

var sxRoof = T([1])([8])(SIMPLEX_GRID([
  ([2,1.5,1.5]),[0.5,0,0],[3,0,0]
]));

var baseStruct = STRUCT([extremeSxWall,sxRoof]);