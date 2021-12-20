//1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var a = prompt('Please, enter a');
var b = prompt('Please, enter b');
var c = prompt('Please, enter c');
if (a == b){
    alert ('Mistake');
} else if (b == c){
    alert ('Mistake');
} else if (a == c) {
    alert ('Mistake');
} else {
    alert ((a + b + c)/3);

}