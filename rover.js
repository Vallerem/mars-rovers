var myRover = {
  position: [0, 0],
  direction: "N"
};

function goForward(rover) {
  if (rover.direction === "N") {
    if (rover.position[0] === 10) {
      rover.position[0] = 0;
    }
    rover.position[0]++;
  } else if (rover.direction === "E") {
    if (rover.position[1] === 10) {
      rover.position[1] = 0;
    }
    rover.position[1]++;
  } else if (rover.direction === "W") {
    if (rover.position[1] === 0) {
      rover.position[1] = 11;
    }
    rover.position[1]--;
  } else if (rover.direction === "S") {
    if (rover.position[0] === 0) {
      rover.position[0] = 11;
    }
    rover.position[1]--;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


function goBackwards(rover) {

  if (rover.direction === "E") {
    if (rover.position[1] === 0) {
      rover.position[1] = 11;
    }
    rover.position[0]--;
  } else if (rover.direction === "N") {
    if (rover.position[0] === 0) {
      rover.position[0] = 11;
    }
    rover.position[0]--;
  } else if (rover.direction === "W") {
    if (rover.position[1] === 10) {
      rover.position[1] = 0;
    }
    rover.position[1]++;
  } else if (rover.direction === "S") {
    if (rover.position[0] === 10) {
      rover.position[0] = 0;
    }
    rover.position[1]++;
  }


  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

}


function roverTurn(turn) {
  // turn LEFT
  if (turn === "l") {
    if (myRover.direction === "N") { // from NORTH --> WEST
      myRover.direction = "W";
    } else if (myRover.direction === "S") { // from SOUTH --> EAST
      myRover.direction = "E";
    } else if (myRover.direction === "E") { // from EAST --> NORTH
      myRover.direction = "N";
    } else if (myRover.direction === "W") { // from WEST --> SOUTH
      myRover.direction = "S";
    }
  }
  // Turn RIGHT
  else if (turn === "r") {
    if (myRover.direction === "N") { // from NORTH --> EAST
      myRover.direction = "E";
    } else if (myRover.direction === "S") { // from SOUTH --> WEST
      myRover.direction = "W";
    } else if (myRover.direction === "E") // from EAST --> SOUTH
      myRover.direction = "S";
  } else if (myRover.direction === "W") { // from WEST --> NORTH
    myRover.direction = "N";
  } else {
    return true;
  }
}


/*
function array2D(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i <= numrows; ++i){
      var columns = [];
      for (var x = 0; x <= numcols; ++x){
         columns[x] = "["+i+","+x+"]" ;
      }
      arr[i] = columns;
    }
    return arr;
}

*/

///////// ******** Show the grid
//var marsMap = {
//  grid : array2D(10,10,0)
//}
//
//console.log("Map:\n\n"+ marsMap.grid);

//Testing

//0goForward(myRover);
//roverTurn("r");
//goForward(myRover);
// -> New Rover Position: [1, 1]


function instructionsQuestion() {

  var moves = prompt('If you want to move the Rovers type "f", "b","r" or "l" . \n"f" = move forward \n"b" = mover backwards \n"r"  = turn right \n"l" = turn left \n Keep in mind that you don\'t move when you turn the rovers. An example would be: "ffflfrfflbbrf"\n\n   North and South move on the Y axis\n   West and East move on the X axis \n\nYou start at [0,0] on a 10 x 10 grid ');

  for (var i = 0; i < moves.length; i++) {
    var instructions = moves[i];
    if (instructions === "f") {
      goForward(myRover);
    } else if (instructions === "b") {
      goBackwards(myRover);
    } else if (instructions === "l") {
      roverTurn(instructions);
    } else if (instructions === "r") {
      roverTurn(instructions);
    } else if (!instructions || instructions === null) {
      return alert('Only enter "f", "b", "r" or "l" !') + instructionsQuestion();
    } else {
      return alert('Only enter "f", "b", "r" or "l" !') + instructionsQuestion();
    }
  }
  return true;
}



///////////////////////////////////



instructionsQuestion()
