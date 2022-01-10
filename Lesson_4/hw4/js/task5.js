// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:

// var computerChoice = Math.random();
// alert(computerChoice);

// let comp = getComputerChoice();
// let user = getUserChoice();
// function game(comp, user) {

// }

//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
// -->

let playGame = confirm('Shall we play a game rock, papper or scissors?');
if (playGame) { // play
    let playerChoice = prompt('Please, enter rock, papper or scissors.');
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if (playerOne === "rock" || 
            playerOne === "papper" || 
            playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let comp = computerChoice === 1 ? "rock" : computerChoice === 2 ? "papper" : "scissors";
            let result = playerOne === comp ? "Tie game!" : playerOne === "rock" && comp === "papper" ?`playerOne: ${playerOne}\nComputer: ${comp}\nComputer wins!` : playerOne === "papper" && comp === "scissors" ? `playerOne: ${playerOne}\nComputer: ${comp}\nComputer wins!` : playerOne === "scissors" && comp === "rock" ? `playerOne: ${playerOne}\nComputer: ${comp}\nComputer wins!` : `playerOne: ${playerOne}\nComputer: ${comp}\nplayerOne win!`
            alert(result);
        }
    } else {
        alert('I guess you changed your mind. May be next time.');
    }
} else {
    alert('Ok, may be next time.')
}


