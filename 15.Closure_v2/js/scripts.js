'use strict';

(function () {

    const randomNumArr = () => {
        const generateArr = [];
        const randomNum = () => {

            for (let i = 0; i < 100; i++) {
                const newNum = Math.floor(Math.random() * 100 + 1);
                if (generateArr.includes(newNum)) {
                    if (generateArr.length === 100) return
                    randomNum()
                    return generateArr
                }
                generateArr.push(newNum);
            }
            return generateArr;
        }
        return randomNum();
    }
    const random = randomNumArr();

    console.log(random);
    console.log(random.sort((a,b) => a - b))

})();