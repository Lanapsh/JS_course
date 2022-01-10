// 5.Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// Выведите массив в консоль
// Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

var arr  = [];
var a = -10;
var b = 10;
var count = 10;

for (var i = 0; i < count; i++){
    arr.push(Math.round(Math.random() * (b - a) + a));
}
console.log(arr);

var sum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i]; 
    }
    
}
console.log(sum);

