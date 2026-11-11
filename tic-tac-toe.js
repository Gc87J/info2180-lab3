document.addEventListener("DOMContentLoaded", function() {

const squaredivs = document.querySelectorAll("#board");

squaredivs.forEach(function(square){
    square.classList.add("square");
});


});