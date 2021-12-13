// 8. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//             «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
//             Значение вводит пользователь

var numFromUser = +prompt ('Please enter your number');

if (numFromUser >= 14 && numFromUser <= 90) {
    alert ('All good num is between 14 and 90 ');
} else {
    alert ('The num is not between 14 and 90 ');
}