var a =  2000;
 

   
   var timer = ()=>{
        return new Promise((reslove,reject)=>{
			console.log(a)
            setTimeout(function(){
                if(a===2000){
                    console.log("타이머값은 2000입니다")
                    reslove();
                }else{
               console.log("2000이 아닙니다")
            }
            },2000)
        })
   }

 
   var timer2 = ()=>{
        return new Promise((reslove,reject)=>{

            setTimeout(function(){
                if(true){
                    console.log("타이머값은 1000입니다")
                    reslove();
                }else{
               console.log("1000이 아닙니다")
            }
            },1000)
        })
   }
 


var asnycFunc = async function(){


      await timer();
      await timer2();
}

asnycFunc()