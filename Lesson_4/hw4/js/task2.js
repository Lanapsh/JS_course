// Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

var x = prompt("Введите число", "");
    var n = prompt("Введите степень", "");
    function power(x, n) {
        var result = Math.pow(x, n) = 1;
        
            result *= x;
        }
        return result;
    }
    if (n < 0) {
        alert('Степень ' + n +
                ' не используется, нужна степень больше нуля');
    } else {
        alert(pow(x, n));
    }