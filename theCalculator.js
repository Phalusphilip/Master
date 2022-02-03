// input function
function calculatorClick(input) {
    var inputDisplayDiv = document.getElementById("simpleCalculation");
    document.getElementById("simpleCalculation").innerText;
    var oldInput= inputDisplayDiv.innerText;
    var newInput= oldInput +""+ input;
    inputDisplayDiv.innerText=newInput;
    console.log(input);
}
// clear
function clearAllInput() {
    var inputDisplayDiv = document.getElementById("simpleCalculation");
    inputDisplayDiv.innerText="";
}
// delete
function deleteInputValue() {
    var inputDisplayDiv = document.getElementById("simpleCalculation");
    document.getElementById("simpleCalculation").innerText;
    inputDisplayDiv.innerText= inputDisplayDiv.innerText.slice(0, - 1);
}   
// calculate function
function calculateValue() {
    var inputDisplayDiv = document.getElementById("simpleCalculation");
    var input= inputDisplayDiv.innerText;
    var result= eval(input);
    inputDisplayDiv.innerText= result;
    var roundNumberAnswer= result;
    var rounded = Math.round((roundNumberAnswer + Number.EPSILON) * 100) / 100;
    console.log(rounded);
}

// scientific calculator
// input function
function calculatorClick(input) {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    document.getElementById("sciCalculation").innerText;
    var oldInput= inputDisplayDiv.innerText;
    var newInput= oldInput +""+ input;
    inputDisplayDiv.innerText=newInput;
    // appendInput(input);
    console.log(input);
}
// clear
function clearAllInput() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    inputDisplayDiv.innerText="";
}
// calculate function
function calculateValue() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    var input= inputDisplayDiv.innerText;
    var result= eval(input);
    // inputDisplayDiv.innerText= result;
    var roundNumberAnswer= result;
    var rounded = Math.round((roundNumberAnswer));
    inputDisplayDiv.innerText= rounded;
    console.log(rounded);
}

// Memory functions
function memoryRecallOperator() {
    let savedNumber=localStorage.getItem("numberStored");
    let newSavedNumber= localStorage.getItem("newNumberStored");
    if(savedNumber) {
        let inputDisplayDiv= document.getElementById("sciCalculation");
        inputDisplayDiv.innerText= localStorage.getItem("numberStored");
    }
    else if  (newSavedNumber) {
        let inputDisplayDiv= document.getElementById("sciCalculation");
        inputDisplayDiv.innerText= localStorage.getItem("newNumberStored");
    }
}

function memoryClearOperator() {
    localStorage.removeItem("numberStored");
    localStorage.removeItem("newNumberStored");
}

function memoryPlusOperator() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    var input= inputDisplayDiv.innerText;
    let numberStored= input;
    localStorage.setItem("numberStored",numberStored);
    let notifyStorage= localStorage.setItem("numberStored",numberStored);
    let memoryRecallColor= document.getElementById('memoryRecallOperator');
        if(notifyStorage) {
            memoryRecallColor.style.backgroundColor="green";
        }
}

function memoryMinusOperator() {
    let savedNumber=localStorage.getItem("numberStored");
        if(savedNumber) {
            let inputDisplayDiv= document.getElementById("sciCalculation");
            let newNumber= inputDisplayDiv.innerText;
            let simpleEquation= localStorage.getItem("numberStored");
            simpleEquation.innerText;
            let solvedEquation= simpleEquation - newNumber;
            inputDisplayDiv.innerText= solvedEquation;
            let newNumberStored= solvedEquation;
            localStorage.setItem("newNumberStored",newNumberStored);
            localStorage.removeItem("numberStored");
        }
}

// Math Operators
function eitherPositiveOrNegative() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var input= inputDisplayDiv.innerText * -1;
    if(input) {
        inputDisplayDiv.innerText=input;
    }
}
function xRaisedToPowerOf2() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText=Math.pow(x,2);
}
function xRaisedToPowerOf3() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText=Math.pow(x,3);
}
function xRaisedToPowerOfY(input) {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    inputDisplayDiv.innerText=input;
    var newInput=""+input;
    let x=oldInput;
    let y=newInput;
    inputDisplayDiv.innerText=Math.pow(x,y);
    // result= Math.pow(x,y);
    // inputDisplayDiv.innerText=result;
        // var newInput= oldInput +""+ input;
        // inputDisplayDiv.innerText=newInput;
}
function tenRaisedToPowerX() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.pow(10,y);
}
function twoRaisedToPowerX() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.pow(2,y);
}
function exponentialRaisedToX(){
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    let eValue= Math.E;
    inputDisplayDiv.innerText=Math.pow(eValue,y);
}
function squareRootX() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText= Math.sqrt(x);
}
function radiiOperator() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    let radiiValue= Math.PI;
    inputDisplayDiv.innerText= radiiValue;
  }
function inverseEquation() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText= 1/x;
}
function percentageEval() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText= x/100;
}
function randOperator() {
    var inputDisplayDiv = document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText=Math.random(x);
}
function logBaseTwoClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math. log2(y);
}
function logBaseTenClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText=Math.log10(x);
}
function cosHClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.cosh(y);
}
function coshInverseClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.acosh(y);
}
function sinHClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.sinh(y);
}
function sinhInverseClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.asinh(y);
}
function tanHClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.tanh(y);
}
function tanhInverseClickFunction() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let y=oldInput;
    inputDisplayDiv.innerText=Math.atanh(y);
}
function factorialOperator(){
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    // inputDisplayDiv.innerText= ;
        if (x<0) return;
        if (x<2) return 1;
        return output = x * factorial(x-1);
}

// function calcFact(num) {
//     var i;
//     var fact=1;
//     for(i=1; i<=num; i++) {
//         fact= fact * 1;
//     }
//     return 1;
// }

function logBase() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText= Math.log(x);
}
function antiLog() {
    var inputDisplayDiv= document.getElementById("sciCalculation");
    var oldInput= inputDisplayDiv.innerText;
    let x=oldInput;
    inputDisplayDiv.innerText= Math.log(Math.pow(x,1));
}
// shift function or second function
                function secondOperatorFunction() {
                    let exponentialClick= document.getElementById('exponentialRaisedToX');
                    let yRaisedToPowerXClick= document.getElementById('yRaisedToPowerX');

                    let tenRaisedToPowerXClick= document.getElementById('tenRaisedToPowerX');
                    let twoRaisedToPowerXClick= document.getElementById('twoRaisedToPowerX');

                    let logBaseClick= document.getElementById('logBase');
                    let inExponentialClick= document.getElementById('antiLog');

                    let logBaseTwoClick= document.getElementById('logBaseTwo');
                    let logBaseTenClick=document.getElementById('logBaseTen');

                    let sinInverseClick=document.getElementById('sinInverse');
                    let sinOperatorClick=document.getElementById('sinOperator');

                    let cosInverseClick=document.getElementById('cosInverse');
                    let cosOperatorClick=document.getElementById('cosOperator');

                    let tanInverseClick=document.getElementById('tanInverse');
                    let tanOperatorClick=document.getElementById('tanOperator');

                    let sinhInverseClick=document.getElementById('sinhInverse');
                    let sinHClick=document.getElementById('sinH');

                    let coshInverseClick=document.getElementById('coshInverse');
                    let cosHClick=document.getElementById('cosH');

                    let tanhInverseClick=document.getElementById('tanhInverse');
                    let tanHClick=document.getElementById('tanH');
                            // 1
                            if (yRaisedToPowerXClick.style.display==="none") {
                                yRaisedToPowerXClick.style.display="block";
                                exponentialClick.style.display="none";
                            }else{
                                yRaisedToPowerXClick.style.display="none";
                                exponentialClick.style.display="block";
                            }
                            // 2
                            if(twoRaisedToPowerXClick.style.display==="none"){
                                twoRaisedToPowerXClick.style.display="block";
                                tenRaisedToPowerXClick.style.display="none";
                            }
                            else{
                                twoRaisedToPowerXClick.style.display="none";
                                tenRaisedToPowerXClick.style.display="block";
                            }
                            // 3
                            if(logBaseClick.style.display==="none"){
                                logBaseClick.style.display="block";
                                inExponentialClick.style.display="none";
                            }
                            else{
                                logBaseClick.style.display="none";
                                inExponentialClick.style.display="block";
                            }
                            // 4
                            if(logBaseTwoClick.style.display==="none"){
                                logBaseTwoClick.style.display="block";
                                logBaseTenClick.style.display="none";
                            }
                            else{
                                logBaseTwoClick.style.display="none";
                                logBaseTenClick.style.display="block";
                            }
                            // 5
                            if(sinInverseClick.style.display==="none"){
                                sinInverseClick.style.display="block";
                                sinOperatorClick.style.display="none";
                            }
                            else{
                                sinInverseClick.style.display="none";
                                sinOperatorClick.style.display="block";
                            }
                            // 6
                            if(cosInverseClick.style.display==="none"){
                                cosInverseClick.style.display="block";
                                cosOperatorClick.style.display="none";
                            }
                            else{
                                cosInverseClick.style.display="none";
                                cosOperatorClick.style.display="block";
                            }
                            // 7
                            if(tanInverseClick.style.display==="none"){
                                tanInverseClick.style.display="block";
                                tanOperatorClick.style.display="none";
                            }
                            else{
                                tanInverseClick.style.display="none";
                                tanOperatorClick.style.display="block";
                            }
                            // 8
                            if(sinhInverseClick.style.display==="none"){
                                sinhInverseClick.style.display="block";
                                sinHClick.style.display="none";
                            }
                            else{
                                sinhInverseClick.style.display="none";
                                sinHClick.style.display="block";
                            }
                            // 9
                            if(coshInverseClick.style.display==="none"){
                                coshInverseClick.style.display="block";
                                cosHClick.style.display="none";
                            }
                            else{
                                coshInverseClick.style.display="none";
                                cosHClick.style.display="block";
                            }
                            // 10
                            if(tanhInverseClick.style.display==="none"){
                                tanhInverseClick.style.display="block";
                                tanHClick.style.display="none";
                            }
                            else{
                                tanhInverseClick.style.display="none";
                                tanHClick.style.display="block";
                            }

                }

                // Rad and Deg click
                var selection= "rad";
                function radAndDegOperator() {
                    let radClick= document.getElementById('radOperator');
                    let degClick=document.getElementById('degOperator');
                    let radText= document.getElementById('radText');
                        if(degClick.style.display==="none"){
                            degClick.style.display="block";
                            radText.style.display="block";
                            radClick.style.display="none";
                        }else{
                            degClick.style.display="none";
                            radText.style.display="none";
                            radClick.style.display="block";
                        }
                }

                // Scientific Math functions
                function sinClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let cosValue=Math.sin(input *(Math.PI/180));
                    inputDisplayDiv.innerText= cosValue;

                    // let radDisplay= document.getElementById('radText');
                    // if(radDisplay.style.display==="block") {
                    //     var inputDisplayDiv = document.getElementById("sciCalculation");
                    //     var input= inputDisplayDiv.innerText;
                    //     let sinValue=  Math.sin(input *(Math.PI/180));
                    //     inputDisplayDiv.innerText= sinValue;
                    // }else{
                    //     var inputDisplayDiv = document.getElementById("sciCalculation");
                    //     var input= inputDisplayDiv.innerText;
                    //     let sinValue=  Math.sin(input);
                    //     inputDisplayDiv.innerText= sinValue;
                    // }
                  }
                function sinInverseClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let sinValue= Math.asin(input);
                    inputDisplayDiv.innerText= sinValue;
                }  

                function cosClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let cosValue=Math.cos(input *(Math.PI/180));
                    inputDisplayDiv.innerText= cosValue;
                  }

                function cosInverseClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let sinValue= Math.acos(input);
                    inputDisplayDiv.innerText= sinValue;
                }

                function tanClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let tanValue=Math.tan(input *(Math.PI/180));
                    inputDisplayDiv.innerText= tanValue;
                  }

                function tanInverseClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let sinValue= Math.atan(input);
                    inputDisplayDiv.innerText= sinValue;
                }  

                function exponentialClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    let exponentialValue= Math.E;
                    inputDisplayDiv.innerText= exponentialValue;
                  }
                  
                function logBaseTwoClickFunction() {
                    var inputDisplayDiv = document.getElementById("sciCalculation");
                    var input= inputDisplayDiv.innerText;
                    let tanValue= Math.tan(input);
                    inputDisplayDiv.innerText= tanValue;
                  }

// function secondOperatorFunction() {
//     var hiddenButton = document.getElementsByClassName('hiddenButton');
//     var shownButton=document.getElementsByClassName('shownButton')
//     if (hiddenButton.style.display==="none") {
//         hiddenButton.style.display = "block";
//         shownButton.style.display="none";
//     } else {
//         hiddenButton.style.display = "none";
//         shownButton.style.display="block";
//     }
//   }


// function appendInput(input) {
//     var inputDisplayDiv = document.getElementById("sciCalculation");
//     document.getElementById("sciCalculation").innerText;
//     if(inputDisplayDiv==''){
//         inputDisplayDiv.innerText=input;
//     }else if(input=='.' && inputDisplayDiv.innerText.indexOf('.')>-1){

//     }else{
//         inputDisplayDiv.innerText+=input;
//     }
// }
