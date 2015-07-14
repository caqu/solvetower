var Combinatorics = require('js-combinatorics');

(function PuzzleSolver () {

  var space = new Array(0,0,0,0,0);

  // Inner Circles: can only place one per layer
  var circles = [
                  [100001],
                  [10001],
                  [1001],
                  [101],
                  [11]
                ];
    //[(3).toString(2), (5).toString(2), (9).toString(2), (17).toString(2), (33).toString(2)];

  // Outer shapes
  var pieces = [
                  [11111],
                  [1,1111],
                  [11,111],
                  [10,1111],
                  [101,111],
                  [11,1110],
                  [1,11,110],
                  [11,10,110],
                  [10,10,111],
                  [10,111,100]
                ];

  function solvePuzzle (space, circles, pieces) {
    // return console.log(typeof space);
    s = space.slice(0);
    c = circles.slice(0);
    p = pieces.slice(0);

    // Calculate all the ways in which the center circles can be arranged
    positionedCircles = Combinatorics.permutationCombination(c);
    
    // TEMPORARILY SKIP COMBINATIONS LOWER THAN 5
    positionedCircles = positionedCircles.toArray().slice(205);

    positionedCircles.forEach(function(stack){
      console.log(stack);
    });

    // for each configuration of circles
    {
      // for each sort of pieces 
        // for each vertical shift
          // for each horizontal shift
            // add piece
            // test
              // fail exit
    }
    // TODO test it's upside-down version
  }

  solvePuzzle(space, circles, pieces);

})();
