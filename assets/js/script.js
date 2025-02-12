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
    createEmptyBoard();
}

/**
 * start a new random filled game board
 * link keydown and game control clicks
 */
function startNewGameBoard(){
    document.addEventListener("keydown", (e) => gameKeyDown(e));
    linkClickToControls();
    createEmptyBoard();
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
console.log("shift left");
}

function shiftUp(){
    console.log("shift up");
    
}

function shiftDown(){
    console.log("shift down");
    
}

function shiftRight(){
    console.log("shift right");
    
}

function createEmptyBoard(){
    const gameContainer = document.getElementById("gameContainer");
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const containerW = containerWidth <= containerHeight ? containerWidth : containerHeight;
    gameContainer.style.height = containerW;
    gameContainer.style.width = containerW;
    console.log(containerWidth/6);
    while (gameContainer.hasChildNodes()) {
        gameContainer.removeChild(gameContainer.firstChild);
      }
      let k = 0;
      for (let i = 0; i < 6; i++){        
          const rowDiv = document.createElement("div");
          rowDiv.className = "row";
              for (let j = 0; j < 6; j++){
                  const colDiv = document.createElement("div");
                  colDiv.classList.add("col-" + i + "-" + j);
                  colDiv.classList.add("col");
                  colDiv.addEventListener("click", (e) => cellDivSelected(e));
                  const cellP = document.createElement("p");
                  cellP.innerText = "";
                  cellP.classList.add("cell-" + i + "-" + j);
                  colDiv.appendChild(cellP);    
                  colDiv.style.left = j * (containerW / 6) + "px";
                  colDiv.style.top = i *(containerW / 6) + "px";
                  colDiv.style.width = (containerW / 6) + "px";
                  colDiv.style.height = (containerW / 6) + "px";
                  colDiv.classList.add("gameBoard-col");               
                  rowDiv.appendChild(colDiv);   
              }
              gameContainer.appendChild(rowDiv);
          }
}

function cellDivSelected(e){
    const selectedElement = e.srcElement;
    let cellP = e.srcElement;
    let colDiv = cellP.parentElement;
    if(selectedElement.tagName.toLowerCase() === "div"){
        colDiv = selectedElement;
        cellP = selectedElement.firstChild;
    }
    if(cellP){
        console.log(cellP);
    }
}
