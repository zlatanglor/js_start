'use strict';

(function () {

    const domElementUl = document.getElementById('ulId');
    const arrAttrValue = [];
    const arrAttrName = [];
    const userName = 'Дима';

    for (let item of domElementUl.attributes) {
        arrAttrValue.push(domElementUl.getAttribute(item.name));
        arrAttrName.push(item.name)
    }

    console.log(arrAttrValue);
    console.log(arrAttrName)

    domElementUl.lastElementChild.innerHTML = `Привет, меня зовут ${userName}`;
    domElementUl.firstElementChild.setAttribute('data-my-name', userName);
    domElementUl.removeAttribute('data-dog-tail')

})();