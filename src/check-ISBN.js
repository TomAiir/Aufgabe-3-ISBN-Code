function checkISBN(numbers) {


    var digit = ' ';
    var sum = 0;

    if (numbers !== null) {
        numbers = numbers.replace(/-/g, "").replace(/ /g, "").slice(0,9);
    }

    /*

    9 876 54321
    1 111 11111 ?
    1 234 56789 
    */

    for (var i = 0, index = numbers.length + 1; i < numbers.length; i++, index--) {
        sum += numbers[i] * index;
    }

    var value = (11 - sum % 11) % 11;

    if (value === 0) {
        return " ";
    } else if (value === 10) {
        return "X";
    } else {
        return value.toString();
    }



};

module.exports = {
    checkISBN
}