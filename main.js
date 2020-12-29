const { checkISBN } = require('./src/check-ISBN')

function check () {

    var input = document.querySelector('#input').value;

    var inputArray = input.split("");
    var last = inputArray[inputArray.length-1];
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
const refresh = document.querySelector('#input');
refresh.addEventListener('input', check);