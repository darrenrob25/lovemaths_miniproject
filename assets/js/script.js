document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener(`click`, function() {
            if (this.getAttribute("data-type") == "submit") {
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`) 
            }
        })
    }
})

/** This main game "loop" is called when the script is first loaded.
 * And after the user's answer has been processed.
 */
function runGame () {

    // Creates two random numbers
    let num1 = Math.floor(math.random() * 25) + 1;
    let num2 = Math.floor(math.random() * 25) + 1;
}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {
    
}