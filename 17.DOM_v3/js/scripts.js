'use strict';

(function () {

    const arr = [1, 2, 3, [4, 5, [6], 5, 4], 3, 2, 1];

    const generateList = array => {

        const ul = document.createElement('ul');
        for (let item of array) {
            const li = document.createElement('li');
            let innerUlList = null;
            if (Array.isArray(item)) {
                innerUlList = generateList(item);
            } else {
                innerUlList = document.createTextNode(item);
            }
            li.append(innerUlList);
            ul.append(li);

        }

        return ul;

    }

    document.body.prepend(generateList(arr))

})();