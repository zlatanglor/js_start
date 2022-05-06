'use strict';
(function (){
    const sum = function () {
        let res = null;
        return function (num) {
            return res += num;
        }
    }
    const count = sum();
    console.log(count(3));
    console.log(count(5));
    console.log(count(20));
})();