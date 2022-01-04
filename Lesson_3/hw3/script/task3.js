// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]

var newArr = +prompt('Enter a width of array');
var mainArr = new Array(newArr);
var oddArr = ['odd', 'odd', 'odd'];
var evenArr = ['even', 'even', 'even'];

for(i = 0; i < mainArr.length; i++){
  if (i % 2 !== 0){
    mainArr[i] = oddArr;
  } else{
    mainArr[i] = evenArr;
  }
}

console.log(mainArr);