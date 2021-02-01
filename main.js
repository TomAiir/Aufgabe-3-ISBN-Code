const { checkISBN, connectedInputs } = require('./src/check-ISBN')
function check() {

    var firstInput = document.querySelector('#firstInput').value;
    var secondInput = document.querySelector('#secondInput').value;
    var thirdInput = document.querySelector('#thirdInput').value;
    var fourthInput = document.querySelector('#fourthInput').value;
    
    var input = connectedInputs(firstInput, secondInput, thirdInput, fourthInput);

    var inputArray = input.split("");
    var last = inputArray[inputArray.length - 1];
    console.log('firstInput'+ firstInput);
    console.log('secondInput'+secondInput);
    console.log('thirdInput'+thirdInput);
    console.log('fouthInput'+fourthInput);
    console.log('input'+input); // wrong input?
    console.log(checkISBN(input));

    if (checkISBN(input) === last) {
        console.log("grüner Fall")
        output.classList.remove('color-red');
        output.classList.add('color-green');
        output.textContent = "ISBN OK";

    } else if (checkISBN(input) === "") {
        console.log("grüner Fall 2")
        output.classList.remove('color-green')
        output.classList.add('color-red');
        output.textContent = "ISBN corrupt";
    } else {
        console.log("roter Fall")
        output.classList.remove('color-green')
        output.classList.add('color-red');
        output.textContent = "ISBN corrupt";
    }

}

var container = document.getElementsByClassName("container")[0];
container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}


const firstRefresh = document.querySelector('#firstInput');
firstRefresh.addEventListener('input', check);

const secondRefresh = document.querySelector('#secondInput');
secondRefresh.addEventListener('input', check);

const thirdRefresh = document.querySelector('#thirdInput');
thirdRefresh.addEventListener('input', check);

const fourthRefresh = document.querySelector('#fourthInput');
fourthRefresh.addEventListener('input', check);