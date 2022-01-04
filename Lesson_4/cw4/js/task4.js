// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении.
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6


function bigString(string) {

    var arrFromString = string.split(' ');
    console.log(arrFromString);

    var maxStr = 0;

    for (i = 0; i < arrFromString.length; i ++) {
        console.log(arrFromString[i].length);


        if (maxStr < arrFromString[i].length) {
            maxStr = arrFromString[i].length;
        }
    }
    console.log('********')
    console.log(maxStr);

}
var text = "The quick brown fox jumped over the lazy dog";
