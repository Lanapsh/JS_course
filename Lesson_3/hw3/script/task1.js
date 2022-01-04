// 1. Сделать собственные примеры методов применяемых для массивов.
// Сумма всех чисел массива:
var arr = [10, 8, 4, 7];
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

arraySum(arr);
