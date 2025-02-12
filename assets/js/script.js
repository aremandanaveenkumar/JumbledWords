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
    linkClickToControls();
}

/**
 * start a new random filled game board
 * link keydown and game control clicks
 */
function startNewGameBoard(){
    document.addEventListener("keydown", (e) => gameKeyDown(e));
    linkClickToControls();
}

/**
 * link click event to game controls left, up, down, right
 */
function linkClickToControls(){
    const left = document.getElementById("shift-left-button");
    const up = document.getElementById("shift-up-button");
    const down = document.getElementById("shift-down-button");
    const right = document.getElementById("shift-right-button");

    left.addEventListener("click", () => shiftLeft());  
    up.addEventListener("click", () => shiftUp());  
    down.addEventListener("click", () => shiftDown());  
    right.addEventListener("click", () => shiftRight()); 
}

/**
 * checks for key down and assigns respective function to it
 * @param {*} e Keyboard events
 */
function gameKeyDown(e){
    if(e.key == "ArrowLeft"){
        shiftLeft();
    } else if(e.key === "ArrowRight"){
        shiftRight();
    } else if(e.key === "ArrowDown"){
        shiftDown();
    } else if(e.key === "ArrowUp"){
        shiftUp();
    }
}

function shiftLeft(){

}

function shiftUp(){
    
}

function shiftDown(){
    
}

function shiftRight(){
    
}
