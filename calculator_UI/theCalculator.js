// input function
function calculatorClick(input) {
    var inputDisplayDiv = document.getElementById("calculation");
    document.getElementById("calculation").innerText;
    var oldInput= inputDisplayDiv.innerText;
    var newInput= oldInput +""+ input;
    inputDisplayDiv.innerText=newInput;
    console.log(input);
}
// clear
function clearAllInput() {
    var inputDisplayDiv = document.getElementById("calculation");
    inputDisplayDiv.innerText="";
}
// delete
function deleteInputValue() {
    var inputDisplayDiv = document.getElementById("calculation");
    document.getElementById("calculation").innerText;
    inputDisplayDiv.innerText= inputDisplayDiv.innerText.slice(0, - 1);
}   
// calculate function
function calculateValue() {
    var inputDisplayDiv = document.getElementById("calculation");
    var input= inputDisplayDiv.innerText;
    var result= eval(input);
    inputDisplayDiv.innerText= result;
    var roundNumberAnswer= result;
    var rounded = Math.round((roundNumberAnswer + Number.EPSILON) * 100) / 100;
    console.log(rounded);
}

// function clearResult() {
//     var inputDisplayDiv = document.getElementById("calculation");
//     let calculatedValue= calculateValue();
//         if(calculatedValue) {
//         inputDisplayDiv.innerText="";
//     }
// }
