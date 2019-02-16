window.addEventListener('load', function(){

const button = document.getElementById('calcular')
button.addEventListener('click', function(){
   
let num1 = parseInt(document.getElementById('operadorA').value);
console.log(num1);
let num2 = parseInt(document.getElementById('operadorB').value);
console.log(num2);
let operador = document.getElementById('operacion').value
switch(operador){
    case "suma":
    console.log(num1+num2)
    document.getElementById('result').innerHTML = "<h3>"+(num1+num2)+"</h3>"
    break
    case "resta":
    console.log(num1-num2)
    document.getElementById('result').innerHTML = "<h3>"+(num1-num2)+"</h3>"
    break
    case "mult":
    console.log(num1*num2)
    document.getElementById('result').innerHTML = "<h3>"+(num1*num2)+"</h3>"
    break
    case "div":
    console.log(num1/num2)
    document.getElementById('result').innerHTML = "<h3>"+(num1/num2)+"</h3>"
    break
}


})


})