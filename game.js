var inquirer = require('inquirer');

var wordsArray = ["Hello Nate", "Shut up Nate"];

var answer;
var correctGuesses = [];
var alreadyGuessed = [];
var unfinishedWord = [];
var tries = 10;

pickWord();

function pickWord() {

    answer = wordsArray[Math.floor(Math.random() * wordsArray.length)];

    getUnfWord();

}

function getUnfWord() {

    unfinishedWord = [];

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

        var key = data.key[0];

        if (!alreadyGuessed.includes(key)) {
            alreadyGuessed.push(key);

            if (answer.toLowerCase().includes(key.toLowerCase())) {
                correctGuesses.push(key.toLowerCase());
                fillInBlanks(key);
            } else {
                tries = tries -1;
                console.log("Sorry, Wrong Answer\n" + unfinishedWord.join(" "));
                getKey();
            }

        } else {
            console.log("You have already guessed that!\n" + unfinishedWord.join(" "));
            getKey();
        }

    });
}

function fillInBlanks(key) {

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === " ") {
            unfinishedWord.push(" ");
        } else if (key.toLowerCase() === answer[i].toLowerCase()) {
            unfinishedWord.splice(i, 1, key);
        }
    }
    console.log(unfinishedWord.join(" "));
    getKey();
}