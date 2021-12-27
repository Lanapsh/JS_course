// 11. Подмассив наибольшей суммы
// Определите максимальную сумму в подмассиве

// // Setup
// var a = [
// [1, -10, 4, 5],
// [1, 5, 5, 3],
// [-1, 8, 4, 1],
// [1, -10, -4, 5],
// [1, 10, 4, 0],
// ];

// Например:
// var a = [
// [1, 3, 6],
// [3, 1, -1],
// [3, 0]
// ];

// Максимальная сумма тут первого подмассива: 1 + 3 + 6 = 10;
// Ответ: 10

var myArray = [
    [1, -10, 4, 5],
    [1, 5, 5, 6],
    [ -1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
];
var sumMax = 0;
for (let i = 0; i < myArray.length; i++) {

    var myArrayLine = myArray[i];
    var lvSum = 0;
    for (let i = 0; i < myArrayLine.length; i++) {

        lvSum += myArrayLine[i];

    }

    if (sumMax < lvSum) {
        sumMax = lvSum
    } else {
        continue;
    }
}

console.log(sumMax);


