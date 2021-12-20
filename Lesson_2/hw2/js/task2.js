// 2. Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4

//     *
//     **
//     ***
//     ****

var k = prompt ('Plase, enter a number from 4 to 10');
var w = '*';
var s = ' ';

for(var i = 1;i <= k; i++){
    
    // for(var j = 0;j < i; j++){
        // document.write('*');
        // star += w;
        document.write(s += w);
    // }
     document.write('<br/>');
}