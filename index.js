//PLAYER 1
let image1 = document.querySelector( '.img1' );
image1.setAttribute( 'src', 'images/dice1.png' );

//PLAYER 2
let image2 = document.querySelector( '.img2' );
image2.setAttribute( 'src', 'images/dice1.png' );

//Randomization
let randomNumber1 = Math.floor( ( Math.random() * 6 ) ) + 1;
let randomNumber2 = Math.floor( ( Math.random() * 6 ) ) + 1;

let randomImageSrc1 = 'images/dice' + randomNumber1 + '.png';
let randomImageSrc2 = 'images/dice' + randomNumber2 + '.png';

//HEADER
let header = document.querySelector( 'h1' );
let interval;

//startButton

let startGame = document.querySelector( '#startGame' );
let resetGame = document.querySelector( '#resetGame' );

startGame.onclick = function () {
    clearInterval( interval );
    interval = setInterval( startPlay, 10 );

}
resetGame.onclick = function () {
    clearInterval( interval );

    image1.setAttribute( 'src', 'images/dice1.png' );
    image2.setAttribute( 'src', 'images/dice1.png' );
    header.textContent = 'Start Game !';

}

function startPlay () {

    document.querySelectorAll( 'img' )[ 0 ].setAttribute( 'src', randomImageSrc1 );
    document.querySelectorAll( 'img' )[ 1 ].setAttribute( 'src', randomImageSrc2 );

    if ( randomNumber1 > randomNumber2 )
    {
        header.textContent = 'Player 1 Winns !!!';

    } else if ( randomNumber2 > randomNumber1 )
    {
        header.textContent = 'Player 2 Winns !!!';
    } else
    {
        header.textContent = 'DRAW !!!'
    }


}




