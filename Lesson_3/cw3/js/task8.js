/* 8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
		Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим цену, т.е.
		[«Шоколадная плитка», 15]
		В списке должно быть не менее 5 подмассивов.
		Выведите в консоль список всех покупок без цен
		Используйте методы добавления удаления элементов из массива */

        let myList = [
            ['Chockolad', 15],
            ['Toilet paper', 10],
            ['Milk', 5],
            ['Juice', 3],
            ['Salad', 7],
            ['Cheasee', 9],
        ]
        console.log(myList);

        for (var i = 0; i < myList.length; i++) {
            console.log(myList[i][0]);
        }