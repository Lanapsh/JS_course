// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"

function reverseStr(test){
    // var newArr = test.split("");
    // var reverseNewArr = newArr.reverse();

    // return reverseNewArr.join("");

    return test.split("").reverse().join("");
}

console.log(reverseStr("new test"));