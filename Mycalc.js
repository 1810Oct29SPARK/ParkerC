window.onload = function() {                                            //applying an event listener to the WINDOW OBJECT
     console.log("There's a snake in my boot!");                        //when the window loads, this function will be executed
    //selecting the element from the DOM with id="answer"
    //add an event listener so that the anonymous function provided 
    //is executed when the element is clicked
document.getElementById("answer").addEventListener("click",function(){
 //retrieve values from user input on the form
let numb1 = document.getElementById("num1").value;
let numb2 = document.getElementById("num2").value;
let chosenOperation;
let operationRadios = document.getElementsByName("operation");
for (let i=0; i < operationRadios.length; i++) {
    if (operationRadios[i].checked) {
        chosenOperation = operationRadios[i].value;
    }
}
//?
console.log(numb1);
console.log(numb2);
console.log(chosenOperation);
//call calculate function with those values and display result
console.log(answer(numb1,numb2,chosenOperation));
document.getElementById("result").value = answer(numb1,numb2,chosenOperation);
});
}
function answer(num1,num2,operation){
    let result = NaN;
    if (operation === "add"){
        result = parseFloat(num1)+parseFloat(num2);
    }
    if (operation === "subtract"){
        result = num1-num2;
    } 

    if (operation === "divide"){
        result = num1/num2;
    }

    if (operation === "multiply"){
        result = num1*num2;
    }

    return result;
}