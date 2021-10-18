'use strict';
// forEach - никогда не возвращает новый массив, просто перебирает существующий

//.filter - возвращает отфильтрованный по условию новый массив

/* const names = ['Ivan','Roman','Elena','Anastasia'];
const  shortNames = names.filter(name =>{
    return name.length<5;
});
console.log(shortNames);
console.log(names); */

//.map - возвращает массив с измененными значениями внутри

const names = ['IvAn','ROman','ElEna','Anastasia'];
const result = names.map(item=> item.toLowerCase());
 //или 
 // const result = names.map(item=> {
 //    return item.toLowerCase()
 //});
console.log(result);
 //или с мутацией
let names = ['IvAn','ROman','ElEna','Anastasia'];
names = names.map(item=> item.toLowerCase());
console.log(names);

//every/some - проверяет на соотвествие элемента в массиве определенному условию
// возвращает bool (true||false)

const some = ['IvAn',4,'ElEna','Anastasia'];

console.log(some.some(item => typeof(item)==='number')); //true
console.log(some.every(item => typeof(item)==='number')); //false

//reduce - схлопывает, собирает массив в единое целое (как правило используется в массивах
//с числовыми данными)

//const arr = [4,5,8,1,9,4];
//const result  = arr.reduce((sum,current)=> sum+current);
// или
//const arr = ['IvAn','ROman','ElEna','Anastasia'];
//const res  = arr.reduce((sum,current)=> `${sum},${current}`);
//console.log(result);
//console.log(res);

//пример

const obj ={
    ivan:'persone',
    ann:'persone',
    dog:'pet',
    cat:'pet'
};
const newArr = Object.entries(obj)  //преобразует все элементы объекта в отдельные массивы
//chaining
.filter(item => item[1]==='persone')   //фильтрует 
.map(item => item[0]);                 // преобразует отфильтрованные массивы в один массив
console.log(newArr);