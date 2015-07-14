"use strict";

var Combinatorics = require('js-combinatorics');

(function PuzzleSolver () {

  var space = new Array(0,0,0,0,0);

  // Inner Circles: can only place one per layer
  var circles = [
                  b('100001'),
                  b('010001'),
                  b('001001'),
                  b('000101'),
                  b('000011')
                ];
    //[(3).toString(2), (5).toString(2), (9).toString(2), (17).toString(2), (33).toString(2)];

  // Outer shapes
  // each piece is represented by 3 rows of 6 digits
  var pieces = [
                  [b('000000000000011111')],
                  [b('000000000001001111'),b('000000001111000001')],
                  [b('000000000011000111'),b('000000000111000011')],
                  [b('000000000010001111'),b('000000001111000010')],
                  [b('000000000101000111'),b('000000000111000101')],
                  [b('000000000011001110'),b('000000001110000011')],
                  [b('000001000011000110'),b('000110000011000001')],
                  [b('000011000010000110'),b('000110000010000011')],
                  [b('000010000010000111'),b('000111000010000010')],
                  [b('000010000111000100'),b('000100000111000010')]
                ];

  function b () {
    return parseInt(arguments[0], 2);
  }
  function solvePuzzle (space, circles, pieces) {
    // return console.log(typeof space);
    var s = space.slice(0),
        c = circles.slice(0),
        p = pieces.slice(0);

    // Calculate all the ways in which the center circles can be arranged
    var positionedCircles = Combinatorics.permutationCombination(c);
    
    // TEMPORARILY SKIP COMBINATIONS LOWER THAN 5
    positionedCircles = positionedCircles.toArray().slice(205);
    console.log(positionedCircles.length + " ways to sort the circles");

    // Reduce
    positionedCircles = positionedCircles.slice(0,1);
    console.log(positionedCircles.length + " is our subset of ways to sort the circles");

    // positionedCircles.forEach(function(stack){
    //   console.log(stack);
    // });

    // Calculate all the ways in which the outer shapes can be oriented
    var orientedPieces = Combinatorics.cartesianProduct.apply(this, pieces).toArray();

    console.log(orientedPieces.length + " ways to orient the outer pieces"); // 512
    // TEMPORARILY TRUNCATE
    orientedPieces = orientedPieces.slice(0,1);
    console.log(orientedPieces.length + " is the subest of ways to orient the outer pieces"); // 512
    // console.log(orientedPieces);

    var orderedPieces = [];
    
    console.log("3,628,800 ways to sort the outer pieces");

    // All permutations would be 3,628,800 permutations * 512 selections * 120 circles
    orientedPieces.forEach(function(selectedPieces){

      // Do all
      // orderedPieces.push( Combinatorics.permutation(selectedPieces).toArray() );

      // Do some
      var inmuted = selectedPieces.slice(0,3);
      orderedPieces = Combinatorics.permutation(selectedPieces.slice(3,10)).toArray();
      orderedPieces.forEach(function(permutation, index){
        orderedPieces[index] = inmuted.concat(permutation);
      });
    });
    // console.log(orderedPieces);
    console.log(orderedPieces.length + " is our subset of sorted outer pieces");


        // for each vertical shift
          // for each horizontal shift
            // add piece
            // test
              // fail exit


  }

  solvePuzzle(space, circles, pieces);

})();
