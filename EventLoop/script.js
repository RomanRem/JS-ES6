'use strict';

/*
console.log(1);  //синхронная операция 1
setTimeout(()=>{            //асинхронная операция

    console.log('timeout_2000');
},2000);
setTimeout(()=>{            //асинхронная операция

    console.log('timeout_4000');
},4000);
console.log(2); //синхронная операция 2

/!*Все callback операции - асинхронны*!/
//если timeout одинаков

setTimeout(()=>{            //асинхронная операция

    console.log('timeout_4000');
},4000);
setTimeout(()=>{            //асинхронная операция

    console.log('timeout_4000_1');
},4000);
*/
/*

//пример функции, которая может забить стек
let k = 0;
function count(){
    for(let i=0; i<1e9; i++){
        k++;
    }
    alert('done');
}
count();*/

setTimeout(()=>{
    console.log(1);

},0);  //но по умолчанию вставляется 4мс
console.log(2);
