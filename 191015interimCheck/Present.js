//함수 선언문과 호이스팅..구조 엉성
// console.log(add(2,3));

// function add(x,y) {
//     return x + y;
// }
// console.log(add(3,4));

//함수 표현식과 호이스팅..권장
console.log(add(2,3));

var add = function (x,y) {
    return x + y;
}
console.log(add(3,4));

//내부 함수와 외부 함수 스코프
// function parent(){
//     var a= 100;
//     var b =200;

//     function child()  {
//         var b = 300;

//             console.log(a);
//             console.log(b);
//     }
//     child();
// }
// parent();
//child();외부에서 내부함수 불가

//부모에서 내부 함수 return하면 가능 
// function parent(){
//     var a = 100;

//     var child = function()  {
//         console.log(a);
//     }
//     return child;
// }
// var inner = parent();
// inner();

//외부에서 내부함수명 호출시
// var factorialVar = function factorial(n){
//     if(n<=1){
//         return 1;
//     }
//     return n*factorial(n-1);
// };

//console.log(factorialVar(3));
////console.log(factorial(3));