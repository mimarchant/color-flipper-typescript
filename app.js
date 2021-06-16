"use strict";
//setting the values to get the hex#
const hexValues = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//capturing the button from the html
let btn = document.getElementById('btn');
//capturing the span element from the html
let span = document.querySelector('.color');
const getValue = () => {
    let value = hexValues[Math.floor(Math.random() * hexValues.length)];
    return value;
};
btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let newValue = getValue();
        hexColor += newValue;
    }
    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
