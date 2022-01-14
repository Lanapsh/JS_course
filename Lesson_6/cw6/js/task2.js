// 2. Каждое число в квадрат

// 	Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.

// 	Пример:
// 	 squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.
		
var squareDigits = function (num){
    // var arr = num.toString().split('');
    // var newArr = arr.map((test) => test*test);

    // var arrToStr = newArr.join('');
    // console.log(arrToStr);

    console.log(num.toString().split('').map((test) => test*test).join(''));
}
squareDigits(9119);