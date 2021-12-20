//3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var firstNumber = prompt ('Please, enter a number');
var secondNumber = prompt ('Please, enter a number');
var thirdNumber = prompt ('Please, enter a number');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log (firstNumber);
} else if (secondNumber > thirdNumber && secondNumber >firstNumber){
    console.log (secondNumber);
} else {
    alert (thirdNumber);  
}
