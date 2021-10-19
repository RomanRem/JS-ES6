'use strict';

console.log(1);  //синхронная операция 1
setTimeout(()=>{            //асинхронная операция

    console.log('timeout_2000');
},2000);
setTimeout(()=>{            //асинхронная операция

    console.log('timeout_4000');
},4000);
console.log(2); //синхронная операция 2