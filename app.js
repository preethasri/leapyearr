var userinput = document.querySelector("#input");
var btn = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output");

function checkleap(input) {

    if (input % 4 == 0) {
        outputDiv.innerHTML = "you were born on leap year"
    } else {
        outputDiv.innerHTML = "you were not born on leap year "
    }

}

function clickEventHandler() {
    var input = userinput.value;
    if (input == "") {
        outputDiv.innerHTML = "please enter a valid value"
    } else if (isNaN(input)) {
        outputDiv.innerHTML = "please enter a number"
    } else {
        checkleap(input);
    }
}
btn.addEventListener("click", clickEventHandler)