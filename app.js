function cal(){
  let num1 = parseFloat(document.getElementById("num1").value);

  let num2 = parseFloat(document.getElementById("num2").value);

  let calculate = document.getElementById("calculate").value;

  let result;

  if (calculate == "+") {
    result = num1 + num2
  }
  else if (calculate == "-") {
    result = num1 - num2
    console.log(result);

  }
  else if (calculate == "*") {
    result = num1 * num2
  }
  else if (calculate == "/") {
    result = num1 / num2
  }
  else if (calculate =="**" ){
    result = num1 ** num2
  }

  else {
    alert("Invalid")
  }
  document.getElementById("Result").value = result

}