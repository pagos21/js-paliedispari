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


// Modalità con For

// function reverseStringWithFor(p1) {
//     var emptyStr = "";
//     for (var i = p1.length - 1; i >= 0; i--) {
//         emptyStr += str[i];
//     }
//     return newString;
// }


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
