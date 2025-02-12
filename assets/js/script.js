window.addEventListener("DOMContentLoaded", (event) =>{
    const aboutGameButton = document.getElementById("aboutGameButton");
    const newGameButton = document.getElementById("newGameButton");
    const newGameBoardButton = document.getElementById("newGameBoardButton");
    var checkBox = document.getElementById("nav-toggle");

    aboutGameButton.addEventListener("click", function(){
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
    });
    newGameButton.addEventListener("click", function(){
        location.hash = "gameSection";
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
        startNewGame();
    });
    
    newGameBoardButton.addEventListener("click", function(){
        location.hash = "gameSection";
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
        startNewGameBoard();
    });
});

/**
 * start a new empty game board
 * link keydown and game control clicks
 */
function startNewGame(){
    document.addEventListener("keydown", (e) => gameKeyDown(e));
}

/**
 * start a new random filled game board
 * link keydown and game control clicks
 */
function startNewGameBoard(){
    document.addEventListener("keydown", (e) => gameKeyDown(e));
}

/**
 * checks for key down and assigns respective function to it
 * @param {*} e Keyboard events
 */
function gameKeyDown(e){

}