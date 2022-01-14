// 1.	Часы
// 	Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.

// 	Пример:
// 	past(0, 1, 1) == 61000

var clock = function(hours, min, sec){
    var hoursInSec = hours * 60 * 60;
    var minInSec = min * 60;
    return (hoursInSec + minInSec + sec) * 1000;
}
console.log(clock(0, 1, 1));