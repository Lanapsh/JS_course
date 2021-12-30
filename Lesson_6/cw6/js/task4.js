// 4.	Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #

// 			Примеры:

// 			removeUrlAnchor('www.codewars.com#about')
// 			// returns 'www.codewars.com'

// 			// returns 'www.codewars.com?page=1' 
// 			removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(){
    var newArr = string.split('');
    var index  = newArr.splice('#');
    var copyArr = newArr.slice()
}