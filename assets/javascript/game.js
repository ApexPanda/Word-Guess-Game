//  Use key events to listen for the letters that your players will type.

var words = ["daleck", "doctor", "companion", "regenerate", "tardis", "ood", "adipose", "captain jack harkness", "sonic screwdriver", "clara oswalad", "wibbly wobbly", "strax", "cybermen"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var currentWordElement = document.querySelector(".blankWordSpaces");

var guessesWordElement = document.querySelector(".guessesSoFar")

var blankSpaces = "";

var letterGuessed = "";

// creates a _ for each letter of the random word
for (var i = 0; i < randomWord.length; i++) {
    
    blankSpaces += "_ ";
    

}

// places _ on the page
currentWordElement.innerHTML = blankSpaces;

// on key up it will document the blankSpaces and event key
document.onkeyup = function(event) {
    blankSpaces = "";
    letterGuessed = event.key;
    console.log(letterGuessed);

    var letterGuessedArr = [];
    

    if (event.keyCode >= 65 && event.keyCode <= 90){


        for (var i = 0; i < randomWord.length; i++) {
            // Checking each letter randomWord
            // If userGuess equals randomWord index of i 
                if (letterGuessed === randomWord[i]){
                // Change blank space to that character
                    blankSpaces += randomWord[i];
                // } 
                } else {
                    blankSpaces += "_ ";
        
                }

    letterGuessedArr.push(letterGuessed);
    console.log(letterGuessedArr);
           
        }
        //put blankSpaces on screen
        currentWordElement.innerHTML = blankSpaces;
        console.log(blankSpaces);

        guessesWordElement.innerHTML = letterGuessed;
        

        // To do
        // Add guess to an array
        // Check every character of array 
        // Check to see if it matches randomWord i 
    }

}



    
