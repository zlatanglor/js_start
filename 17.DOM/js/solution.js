'use strict';

(function () {

    const domElementUl = document.getElementById('ulId');
    const arr = [];

    for (let li of domElementUl.children){
        arr.push(li.innerHTML)
    }

    console.log(arr);
    console.log(arr.length);

})();