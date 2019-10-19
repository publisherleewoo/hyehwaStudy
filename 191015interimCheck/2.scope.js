
/*
스코프체인: 함수가 선언되는순간 정해져있는것이 스코프라 생각하면될듯
*/

// var value = "value1";
// function printFunc(){
//     var value = "value2";
    
//     function printValue(){
//         return value;
//     }
    
//     console.log(printValue())
// }

// printFunc();




var value = "value1";

function printValue(){
    return value
}

function printFunc(func){
    var value = "value2";
    console.log(func());
}

printFunc(printValue)
