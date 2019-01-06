const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init() {
  let index = 0
  window.addEventListener("keydown", function(e){
    let key = e.keyCode

  	if (key === code[index]){
      console.log("correct")
      index = index+1
      if (key === 65){
        window.alert("Hurray!")
      }
    }else{
      console.log("back to zero")
      index = 0
    }

  });
}
