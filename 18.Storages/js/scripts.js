'use strict';

(function () {

    const formSelector = '#form';
    const form = document.querySelector(formSelector);
    const searchInputs = element => element.querySelectorAll('input, select, textarea');

    const submitHandler = e => {
        e.preventDefault();

        const inputs = searchInputs(e.target);
        const data = {};

        for (const input of inputs) {
            data[input.name] = input.value
        }

        localStorage.setItem(formSelector, JSON.stringify(data));
        window.location.href = '../html/input_value.html';
    };

    const loadHandler = () => {
        if (!localStorage.getItem(formSelector)) return

        const inputs = searchInputs(form);
        const data = JSON.parse(localStorage.getItem(formSelector));

        for (const input of inputs) {
            input.value = data[input.name]
        }
    };

    form.addEventListener("submit", submitHandler);
    document.addEventListener( 'DOMContentLoaded', loadHandler);

})();