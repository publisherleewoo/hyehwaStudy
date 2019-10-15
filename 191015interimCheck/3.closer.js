function outter(){
    var variable = "아우터함수의 변수";
    console.log("아우터")
    return function inner(){  //외부함수의 지역변수를 참조하는 inner함수가 클로저 
        console.log("이너")
        console.log(variable)
    }
}
/*
주의사항. outter는 함수의 컨텍스트에서 종료된상황인데 variable을 접근할수있다.
이말은 메모리 어딘가에 variable이 남아있다는소리. 클로저를 사용할때는 메모리 누수(leak)가 주의사항이다.
*/
var inner = outter();   
inner();
inner();
inner();





/* 루프안에서의 클로저 사용법. */

function loopCloser(arg1){
    for(var i=0; i<= arg1; i++){
        (function(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        })(i)
    }
}

loopCloser(10)