// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент).
// Если ни один элемент не проходит тест, вернуть undefined.

var arrNumbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];

function findElement(arr, func) {

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            console.log(arr[i]);
        }
    }
    return ;
}

// console.log(findElement(arrNumbers, checkIfEven));

findElement(arrNumbers, checkIfEven);

function checkIfEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
