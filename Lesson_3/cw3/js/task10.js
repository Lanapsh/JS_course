// 10. Сумма введённых чисел

// 		Создайте массив
// 		Через цикл запрашивайте у пользователя цифры
// 		Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 		Подсчитайте и верните сумму элементов массива.
// 		P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

var myArray = [];

while(true) {
    var numFromUser = +prompt("Please, enter a number");
    if ( isNaN(numFromUser) || numFromUser == "" || numFromUser == null){
        break;
    }
    myArray.push(numFromUser);  
}

var summ = 0;  
for(let i = 0; i < myArray.length; i++){
    summ += myArray[i];
}
console.log(summ);