// function reverseFun(p1){
//   var str2Arr = p1.split("");
//   var reverseArr = str2Arr.reverse();
//   var arr2Str = reverseArr.join("");
//   return arr2Str;
// }

// Modalità contratta
function reverseFun(p1){
  return p1.split("").reverse().join("");
}


btn.addEventListener("click", function(){

  var input = document.getElementById("input").value;

  if (input === reverseFun(input)){
    console.log("Yes! " + input + " è palindromo!");
  }
  else{
    console.log("Nope!");
    console.log(reverseFun(input) + " non è palindromo di " + input);

  }
});
