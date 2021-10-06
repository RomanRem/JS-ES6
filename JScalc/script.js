'use strict';
let calc = new Calculator();
    function Calculator ()  {
    let textArea = document.getElementById('status');
    let calcForm = document.getElementById('calcForm');

        const btnsArray = ['0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9',
            '+', '-', '*', '/', '=', 'c'];


        btnsArray.forEach(function (sign) {
            let signElement = document.createElement('div');
            signElement.className = 'number';
            signElement.innerHTML = sign;
            calcForm.appendChild(signElement);
        });


    document.querySelectorAll('#wrap .number').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {
        if (e.target.innerHTML === 'c') {
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            textArea.innerHTML = e.target.innerHTML;
        } else {
            textArea.innerHTML += e.target.innerHTML;
        }
    }
};






