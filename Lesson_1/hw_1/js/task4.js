// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.

var firstName = prompt ('Your first name');
var lastName = prompt ('Your last name');
var age = +prompt ('Your age');

var result = "Пользователь с именем" + firstName + "и фамилией" + lastName + " и его возраст через 10 лет будет + " + (age +10);

console.log (result);