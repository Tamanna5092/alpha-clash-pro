// function play(){
//     // hide the home scree
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen)
//     // show the play ground

//     const playGround = document.getElementById('play-ground');
//     // console.log(playGround.classList)
//     playGround.classList.remove('hidden');
// }

function handelKeyboardButtonPress(event){
    const playerPress = event.key
    console.log('player press', playerPress);

    // stop the game if press esc
    if(playerPress === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPress, expectedAlphabet);

    // if right or wrong key press
    if(playerPress === expectedAlphabet){
        console.log('you win a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // -------------------------------------------
        // // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScoreText)

        // // increase the score by 1
        // const newScore = currentScore + 1;

        // // show the updated score
        // currentScoreElement.innerText = newScore;

        // // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const lifeScore = getTextElementValueById('current-life');
        const updatedLife = lifeScore - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){ 
            gameOver();
        }

        // -----------------------------------------
        // // get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // reduce the life count
        // const newLife = currentLife - 1;

        // display the updated the life count
        // currentLifeElement.innerText = newLife;

    }
}
// capture keyboard key press
document.addEventListener('keyup',handelKeyboardButtonPress);

function continueGame(){
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet', alphabet)

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText =alphabet;
    
    // set background color 
    setBackgroundColorById(alphabet);
}


function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}