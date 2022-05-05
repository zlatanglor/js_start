'use strict';
(function () {
    //1
// function getFactorial(n) {
//     return n !== 1 ? n * getFactorial(n - 1) : n;
// }
    const getFactorial = n => n !== 1 ? n * getFactorial(n - 1) : n;
    console.log(getFactorial(4));

//2
// function pow(num, degree) {
//     return degree === 1 ? num : num * pow(num, degree - 1);
// }
    const pow = (num, degree) => degree === 1 ? num : num * pow(num, degree - 1);
    console.log(pow(3, 3));

//3
// function sum (a, b) {
//     if (a === 0) {
//         return b;
//     }
//     if (b === 0 ) {
//         return a;
//     }
//     let i = sum(a - 1, b);
//     return ++i;
// }
    const sum = (a, b) => {
        if (a === 0) {
            return b;
        }
        if (b === 0 ) {
            return a;
        }
        let i = sum(a - 1, b);
        return ++i;
    }
    console.log(sum(2, 1))
})();