//1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var a = +prompt('Please, enter number');
var b = +prompt('Please, enter number');
var c = +prompt('Please, enter number');
if (a == b){
    alert ('Mistake');
} else if (b == c){
    alert ('Mistake');
} else if (a == c) {
    alert ('Mistake');
} else {
    alert ((a + b + c)/3);
   
}