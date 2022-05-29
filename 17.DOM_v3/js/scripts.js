'use strict';

(function () {

    const arr = [1, 2, 3, [4, 5, [6], 5, 4], 3, 2, 1];

    const generateList = (array) => {

        return `<ul>${array.reduce((str, item) => {
            str += `<li>${Array.isArray(item) ? generateList(item) : item }</li>`;
            return str;
        }, '')}</ul>`;

    }

    const  generatedList = generateList(arr);
    document.body.insertAdjacentHTML("afterbegin", generatedList);

})();