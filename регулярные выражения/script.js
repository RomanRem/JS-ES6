'use strict';

/* new RegExp('pattern', 'flags');

/pattern/flags */

/* const ans = prompt('ВВедите ваше имя');

const reg = /n/ig;
console.log(ans.match(reg)); */

/* const pass=prompt('Password');

console.log(pass.replace(/\./g, '*')) */

/* console.log('12-34-56'.replace(/-/g,':')); */
/* const ans = prompt('ВВедите ваше имя');

const reg = /\d/g;

console.log(ans.match(reg)) */
const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));