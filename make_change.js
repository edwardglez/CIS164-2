// const $ = selector => document.querySelector(selector);

const $ = function (id) {return document.getElementById(id); };

// Function makeChange()

function makeChange() {
    let cents = $('cents').value;
    if (cents <= 0 || cents > 99) {
        alert('Please enter a number between 0 and 99')
    }

    const quarters = Math.floor(cents/25);
    cents %= 25;
    $('quarters').value = quarters

    const dimes = Math.floor(cents / 10);
    cents %= 10;
    $("dimes").value = dimes

    const nickels = Math.floor(cents / 5);
    cents %= 5;
    $("nickels").value = nickels

    const pennies = Math.floor(cents / 1);
    cents %= 1;
    $("pennies").value = pennies
}

document.addEventListener('DOMContentLoaded', () => {
    $('#calculate'),addEventListener('click', makeChange)
})

// window.onload = function () {
//     $("calculate").onclick = makeChange;
// }

























