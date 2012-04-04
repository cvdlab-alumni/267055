var extremeSxWall = (SIMPLEX_GRID([([6,8,6.5]),[0.5,0,0],[3,0,0]]));

//Cercare di snellire
var upWall = (SIMPLEX_GRID([
  ([0,5,3]),[8,0,0],[3,0,0]
]));

var baseStruct = STRUCT([extremeSxWall,upWall]);