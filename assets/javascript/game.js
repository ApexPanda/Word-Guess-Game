//  Use key events to listen for the letters that your players will type.

var words = ["daleck", "doctor", "companion", "regenerate", "tardis", "ood", "adipose", "captain jack harkness", "sonic screwdriver", "clara oswalad", "wibbly wobbly", "strax", "cybermen"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var currentWordElement = document.querySelector(".blankWordSpaces");

var blankSpaces = "";

var letterGuessed = "";


for (var i = 0; i < randomWord.length; i++) {
    
    blankSpaces += "_ ";
    

}

currentWordElement.innerHTML = blankSpaces;

document.onkeyup = function(event) {
    blankSpaces = "";
    letterGuessed = event.key;
    console.log(letterGuessed);

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
           
        }
        //put blankSpaces on screen
        currentWordElement.innerHTML = blankSpaces;
        console.log(blankSpaces);


        // To do
        // Add guess to an array
        // Check every character of array 
        // Check to see if it matches randomWord i 
    }

}



    


//  Display the following on the page:

//  Press any key to get started!

//  Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

//  Number of Guesses Remaining: (# of guesses remaining for the user).

//  Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

//  After the user wins/loses the game should automatically choose another word and make the user play it.
