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
        //startNewGame();
    });
    
    newGameBoardButton.addEventListener("click", function(){
        location.hash = "gameSection";
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
        //startNewGameBoard();
    });
});