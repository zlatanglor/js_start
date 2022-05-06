'use strict';
(function () {
    const randomNum = () => {
        const generateNum = [];
        return function () {
            let newNum = Math.floor(Math.random() * 100 + 1);
            for (let i = 0; i < generateNum.length; i++) {
                if (generateNum[i] === newNum) {
                    return
                }
            }
            generateNum.push(newNum);
            return generateNum;
        }
    }
    const random = randomNum();
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
    console.log(random());
})();