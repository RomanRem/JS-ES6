const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;                          //1 элемент
    let end = array.length;                 // последний элемент
    let middle;
    let found = false;                      //флаг нахождения элемента
    let position = -1;
    while (found === false && start <= end) {
        count+=1;
        middle = Math.floor((start + end) / 2);        //позиция центрального элемента, с округлением
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

function recursiveBinarySearch(array, item, start, end) {               //рекурсивно
    let middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 );
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end );
    }
}

console.log(recursiveBinarySearch(array, 14, 0, array.length));
console.log(count);     //количество итераций

//работает только с отсортированными массивами
//неотсортированные массивы приведут к ошибке в поиске
// есть смысл использовать только в случае с изначально отсортированным массивом
// т.к сортировка перед использованием бинарного поиска - сводит на нет скорость, //
// т.к время сортировки длительней линейного поиска
// O(n2)