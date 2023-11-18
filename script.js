var operator = "";
var operand1 = ""; 
var operand2 = "";

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function operation(value){
  operator = value;
  if (document.getElementById('display').value.includes(".")){
    operand1 = parseFloat(document.getElementById('display').value);
  }
  else{
    operand1 = parseInt(document.getElementById('display').value);
  }
  clearDisplay();
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function switchsign(){
  if (operator == ""){
    if (document.getElementById('display').value.includes(".")){
      operand1 = parseFloat(document.getElementById('display').value);
    }
    else{
      operand1 = parseInt(document.getElementById('display').value);
    }
    operand1 = -operand1;
    document.getElementById('display').value = operand1;
  }
  else{
    if (document.getElementById('display').value.includes(".")){
      operand2 = parseFloat(document.getElementById('display').value);
    }
    else{
      operand2 = parseInt(document.getElementById('display').value);
    }
    operand2 = -operand2;
    document.getElementById('display').value = operand2;
  }
  
}

function erase(){
  document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}

function calculate() {
  if (document.getElementById('display').value != "" && operator != "" && operand1 != "") {
    if (document.getElementById('display').value.includes(".")){
      operand2 = parseFloat(document.getElementById('display').value);
    }
    else{
      operand2 = parseInt(document.getElementById('display').value);
    }
    switch (operator) {
        case "+":
            document.getElementById('display').value = operand1 + operand2;
            break;
        case "-":
            document.getElementById('display').value = operand1 - operand2;
            break;
        case "*":
            document.getElementById('display').value = operand1 * operand2;
            break;
        case "/":
            document.getElementById('display').value = operand1 / operand2;
            break;
    }
    operator = "";
    operand1 = ""; 
    operand2 = "";
  }
}
