/*
ECMAscript에서는
실행컨텍스트는 실행가능한 코드를 형상화하고 구분하는 추상적(!)인 개념
그렇기때문에 정답은없다, 스택화 블록으로 그린 그림이 많이 있으나, 프로그래밍 전문경험없는 본인은 도식화 취향이아님
*/  



/*
실행 컨텍스트가 실행되면 엔진이 컨텍스트에 필요한 정보를 담을 객체를 생성.
이것을 활성객체라고한다. 이객체는 매개변수나 사용자가 정의한 변수 및 객체를 저장하고 새로만들어진 컨텍스트로 접근가능
사용자 접근 불가.
*/

// 표현식에서는 함수가 실행되기전까지 메모리생성,초기화 과정이 일어나지않는다. 그냥 표현식 선언부는 실행부를 만나기전까지 
// 스크립트 엔진 내의 컨텍스트가 무시하고간다고 생각하면될듯
// function execute(param1,param2){
//     var a = 1, b= 2;
//     function func(){
//         return a+b;
//     }
//     console.log(arguments)
//     return param1+param2+func();
// }
// var result = execute(3,4);
// console.log(result)

/*
arguments 객체는 유사배열객체이다. (4장 참고)

  execute 실행컨텍스트
  활성객체
  arguments ->[param1,param2]
  [[scope]] -> [List]     //함수가 실행되는순간 새로운컨텍스트가 만들어지는 동시 스코프체인이 형성되어진다.
  param1:value     param2:value
  a:undefined      b:undefined           //코드 실행되면 할당된다.
  func         ->   Function Object
  this         ->   Object   (참조객체가 없으면 전역객체를 참조,  일반함수내부에서 this는 전역객체를 참조)

*/


 