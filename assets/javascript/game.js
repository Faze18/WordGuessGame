var word1 = ["p", "e", "r", "p", "i","t", "r", "a", "t", "o","r"];
var word2 = ["g", "u", "i","l","t","y"];
var word3 = ["o", "b","j", "e", "c", "t","i", "o", "n"];
var word4 = ["w", "i", "t", "n", "e","s","s"];
var word5 = ["i", "n", "j", "u","n","c","t","i","o","n"];
var wordLength = 0;
var words = [word1, word2, word3, word4, word5];
var acceptableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var acceptable = false;
var fill = true;

var wins = 0;
var losses = 0;
var guesses = 6;
var correctLettersCount = 0;
var gameNumber = 0;
var l;
var alreadyGuessed = false;


var empty = [];
var correctLetters = [];
var incorrectLetters = [];
var guessedLetters = [""];
var gameOver = false;

blankFiller();
game();


//CLICK EVENT
// This function is run whenever the user presses a key.
function game() {
    if(!gameOver){
    update();
    }

    
    // //variables
    // var winText = "<p>Wins: " + wins + "</p>";
    // var lossText = "<p>Losses: " + losses + "</p>";
    // var guessedText = "<p>Guessed Letters: " + guessedLetters.join(" ")+ "</p>";
    // var emptyText = "<p>Blank Word: " + empty.join(" ") + "</p>";
    // var guessesText ="<p>Guesses left: " + guesses +"</p";

    // // DISPLAY THE VARIABLES
    // document.querySelector( "#wins" ).innerHTML = winText;
    // document.querySelector( "#losses" ).innerHTML = lossText;
    // document.querySelector( "#guessed" ).innerHTML = guessedText;
    // document.querySelector( "#empty" ).innerHTML = emptyText;
    // document.querySelector( "#chances" ).innerHTML = guessesText;
    document.onkeyup = function ( event ) {
    

        alreadyGuessed = false;

        if ( !gameOver ) {
            // Determines which key was pressed.
            var l = event.key;
            l = l.toLowerCase();
            //verify the letter has not been guessed
            // letterCheck(l);
            letterCheck( l );
            if ( acceptable ) {
                for ( var i = 0; i < guessedLetters.length; i++ ) {
                    //IF NOT GUESSED THEN RUN THE LETTER GUESS CHECKER
                    if ( l == guessedLetters[i] ) {
                        //Instert game code here 
                        alreadyGuessed = true;
                    }
                    else {
                        console.log( "please guess a letter that has not been already guessed" );
                    }
                }
                if ( !alreadyGuessed ) {
                    guessChecker( l );
                    if(fill){
                        guessedLetters[guessedLetters.length] = l;
                    }
                }
                

                // winCheck();
                // loseCheck();
                // newGame();

                //
                // win checks
                
                wordLength = words[gameNumber];
                if ( correctLettersCount >= wordLength.length ) {
                    wins++;
                    gameOver = true;
                    // newGame();
                }

                //Loss Check
                if ( guesses == 0 ) {
                    losses++;
                    gameOver = true;
                    // newGame();
                
                }

                //VARIABLES TO HOLD HTML STRINGS
                // var winText = "<p>Wins: " + wins + "</p>";
                // var lossText = "<p>Losses: " + losses + "</p>";
                // guessed
                // var guessedText = "<p>Guessed Letters: " + guessedLetters.join(" ")+ "</p>";
                // var emptyText = "<p>Blank Word: " + empty.join(" ") + "</p>";
                // var guessesText ="<p>Guesses left: " + guesses +"</p";

                // // DISPLAY THE VARIABLES
                // document.querySelector( "#wins" ).innerHTML = winText;
                // document.querySelector( "#losses" ).innerHTML = lossText;
                // document.querySelector( "#guessed" ).innerHTML = guessedText;
                // document.querySelector( "#empty" ).innerHTML = emptyText;
                // document.querySelector( "#chances" ).innerHTML = guessesText;

                // winCheck();
                // loseCheck();
                acceptable = false;
            }
            update();
        }
        if ( gameOver ) {
            var guessesText = "<p> Press 'r' to reveal the word<br>or 'n' for a new game  </p>";

            // DISPLAY THE VARIABLES
            document.querySelector( "#chances" ).innerHTML = guessesText;

            var n = event.key;
            n = n.toLowerCase();
            if (n=="r")
            
            {
                var filledWord = "<p>" + words[gameNumber].join(" ") + "</p>";
                document.querySelector( "#empty" ).innerHTML = filledWord;
            }

            if ( n == "n" ) {
                newGame();
                blankFiller();
                update();
            }
        }
    

        // update();
        // //VARIABLES TO HOLD HTML STRINGS
        // var winText = "<p>Wins: " + wins + "</p>";
        // var lossText = "<p>Losses: " + losses + "</p>";
        // var guessedText = "<p>Guessed Letters: " + guessedLetters.join(" ")+ "</p>";
        // var emptyText = "<p>Blank Word: " + empty.join(" ") + "</p>";
        // var guessesText ="<p>Guesses left: " + guesses +"</p";

        // // DISPLAY THE VARIABLES
        // document.querySelector( "#wins" ).innerHTML = winText;
        // document.querySelector( "#losses" ).innerHTML = lossText;
        // document.querySelector( "#guessed" ).innerHTML = guessedText;
        // document.querySelector( "#empty" ).innerHTML = emptyText;
        // document.querySelector( "#chances" ).innerHTML = guessesText;
    };
}


function blankFiller() {
    empty = [];
    for ( var i = 0; i < words[gameNumber].length; i++ ) {
        empty[i] = "_";
    }
}

function guessChecker( letter ) {
    var found = false;
    for ( var i = 0; i < words[gameNumber].length; i++ ) {
        if ( letter === words[gameNumber][i] ) {
            empty[i] = letter;
            found = true;
            correctLettersCount++;
            correctLetters[guessedLetters.length] = letter;
            fill = true;
        }
    }
    if ( !found ) {
        guesses--;
        incorrectLetters[guessedLetters.length] = letter;
        fill=true;
        // guessedLetters[guessedLetters.length] = letter;
    }
}

// function winCheck() {
//      wordLength = words[gameNumber];
//     if ( correctLetters >= wordLength.length) {
//         wins++;
//         gameOver = true;
//         // newGame();
//     }
// }

// function loseCheck() {
//     if ( guesses == 0 ) {
//         losses++;
//         gameOver = true;
//         // newGame();
//     }
// }

function newGame() {
    if ( gameOver ) {
        guessedLetters = [""];
        empty = [];
        gameNumber = wins + losses;
        gameOver = false;
        guesses = 6;
        correctLettersCount = 0;
        correctLetters = [];
        incorrectLetters = [];
        blankFiller();
    }

}
function update() {
    var winText = "<p>Wins<br>" + wins + "</p>";
    var lossText = "<p>Losses<br>" + losses + "</p>";
    var guessedText = "<p>Letters Guessed:<br> " + guessedLetters.join( " " ) + "</p>";
    var emptyText = "<p>" + empty.join( " " ) + "</p>";
    var guessesText = "<p>Guesses left:<br> " + guesses + "</p>";

    // DISPLAY THE VARIABLES
    document.querySelector( "#wins" ).innerHTML = winText;
    document.querySelector( "#losses" ).innerHTML = lossText;
    document.querySelector( "#guessed" ).innerHTML = guessedText;
    document.querySelector( "#empty" ).innerHTML = emptyText;
    document.querySelector( "#chances" ).innerHTML = guessesText;
}

function letterCheck( letter ) {
    for ( var i = 0; i < acceptableLetters.length; i++ ) {
        if ( letter == acceptableLetters[i] ) {
            acceptable = true;
        }
    }
}

