// 9. Давайте произведём 5 операций с массивом.

// 			9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
// 			9.2 Добавьте «Рок-н-ролл» в конец.
// 			9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 			9.4 Удалите первый элемент массива и покажите его.
// 			9.5 Вставьте «Рэп» и «Регги» в начало массива.

let myArray = ["Jaz", "Bluz"];

myArray.push("Rok-n-roll");

var midle = Math.floor(myArray.length / 2);

    console.log(myArray.splice(midle,1, "Classic"));
    console.log(myArray.shift());
    console.log(myArray.unshift("Rep", "Reggi"));
    console.log(myArray);

