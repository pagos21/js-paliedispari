function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function sumF(num1, num2){
  res = num1 + num2;
  return res;
}


btn.addEventListener("click", function(){
  var input = parseInt(document.getElementById("input").value);
  if (isNaN(input) || /\s/.test(input) || input > 5) {
    alert("Non hai inserito un numero valido!")
    throw new Error("Non hai inserito un numero valido!");
  }

  var evenOdd = document.getElementById("evenOdd").value;
  var cpu = randomIntInclusiveF(1, 5);
  console.log("Choosen by cpu " + cpu);
  var sumRes = sumF(input, parseInt(cpu));
  console.log("The sum is: " + sumRes);
  if (sumRes%2 == 0 && evenOdd == "PARI") {
    console.log("You Win!");
  } else if (sumRes%2 && evenOdd == "DISPARI") {
    console.log("You win!!");
  } else {
    console.log("CPU Won!");
  }
});
