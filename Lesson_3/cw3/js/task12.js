// 12*. Запросите у пользователя число и проверьте есть ли оно в массиве
// Если есть, то сколько раз встречается

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var numFromUser = +prompt("Please, enter a number.");
var pairCount = 0;

function pairs (a){
    for (var i = 0; i < myArray.length; i++){
        if (numFromUser == myArray[i]){
            pairCount++; 
        }
   }
   return pairCount;
}
console.log(pairs(myArray));

