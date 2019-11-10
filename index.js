const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    let found = arr.find(function(obj){
      return obj['result'] === "W"
    })
		if(found){
      return found.year
    } else {
      return undefined
    }
}
