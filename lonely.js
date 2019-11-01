


// inspired by Eleanor Rigby lyrics 

function universe (x, y) {
  var world = []
  for (i=0; i<y; i++) {
    var eachLine = []
    for (j=0; j<x; j++) {
      eachLine.push("PPL")
    }
    world.push(eachLine)
  }
  console.log(world)

  var lonelyWorld = []

  for (i=0; i<y; i++) {
    var eachLine = []
    for (j=0; j<x; j++) {
      eachLine.push("LP")
    }
    lonelyWorld.push(eachLine)
  }
  console.log(lonelyWorld)
}
universe(5, 5)




  // var randRowIndex = Math.floor(Math.random()*row)
  // var randColIndex = Math.floor(Math.random()*col)
  // world[randColIndex][randRowIndex] = "Treasure"