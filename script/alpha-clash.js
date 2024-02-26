function play(){
    // hide the home scree
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    // console.log(homeScreen)
    // show the play ground

    const playGround = document.getElementById('play-ground');
    // console.log(playGround.classList)
    playGround.classList.remove('hidden');
}