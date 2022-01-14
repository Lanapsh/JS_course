// 8.	Напишите функцию, которая принимает строку и удаляет в ней все дублирующиеся слова, оставляя тем самым только уникальные

// Пример:

// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

function filtrString(string) {
    var arr = string.split(' ');
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
console.log(filtrString('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
