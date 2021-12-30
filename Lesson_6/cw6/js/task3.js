// 3.	Заменить все элементы

// 			Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим - 
// 			элемент, который должен заменить второй элемент.
// 			Пример:
// 			 replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

function replaceAll(arr, oldItem, newItem){
    // var index = arr.indexOf(oldItem);
    // arr.splice(index, 1, newItem);

    // console.log(arr);

    arr.splice(arr.indexOf(oldItem), 1, newItem);

    console.log(arr);

}
replaceAll([1,2,2], 1, 2);