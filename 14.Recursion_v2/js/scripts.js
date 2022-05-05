'use strict';
(function () {

    const palindrome = (num, i = 1) => {
        const rev =  String(num).split('').reverse().join('');
        const sum = num + +rev;
        const sumRev = String(sum).split('').reverse().join('');
        if (sum === +sumRev) {
            return {
                result: sum,
                steps: i
            }
        }
        return palindrome(sum, ++i);
    }

    console.log(palindrome(69));
})();