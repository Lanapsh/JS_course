// 6. Напишите функцию,которая сгенерирует массив рандомных чисел(кол - во элементов в массиве вводит пользователь)от - 10 до 10
// Определите наименьшее и наибольшее число в массиве.Массив,
// минимальное и максимальное число - вывести в консоль.

var arr  = [];
var a = -10;
var b = 10;
var count = +prompt('Enter a length of array');

for (var i = 0; i < count; i++){
    arr.push(Math.round(Math.random() * (b - a) + a));
}
console.log(arr);

let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
 

console.log(`max: ${max}`); 
console.log(`min: ${min}`); 