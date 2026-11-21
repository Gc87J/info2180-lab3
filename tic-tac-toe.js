document.addEventListener("DOMContentLoaded", function() {

const squaredivs = document.querySelectorAll("#board");

let gameState = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";



squaredivs.forEach(function(square, index) {
    square.classList.add("square");

    square.addEventListener("click", function() {
        if (gameState[index] !== "") {
            return;
        }

        gameState[index] = currentPlayer;

        square.textContent = currentPlayer;

        square.classList.add(currentPlayer);
        

       

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        
    });






});


});