var inquirer = require('inquirer');

var wordsArray = ["Hello Nate", "Shut up Nate"];

var answer;
var correctGuesses = [];

pickWord();

function pickWord() {

    answer = wordsArray[Math.floor(Math.random() * wordsArray.length)];

    getUnfWord();

}

function getUnfWord() {

    var unfinishedWord = [];

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === " ") {
            unfinishedWord.push(" ");
        } else {
            unfinishedWord.push("_");
        }
    }
    console.log(unfinishedWord.join(" "));

    getKey();
}

function getKey() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'key',
            message: 'Guess a letter in the word?'
        }
    ]).then(function (data) {
        if (!correctGuesses.includes(data.key)){

        }
         else if (answer.toLowerCase().includes(data.key.toLowerCase())) {
            correctGuesses.push(data.key)
        }       

    });
}