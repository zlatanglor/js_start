'use strict';

(function () {

    const memoize = fn => {
        const cache = new Map;

        return (...args) => {
            const generateKey = args => args.map(args => args).join(' + ');
            const key = generateKey(args);

            if (cache.has(key)) {
                console.log(`From cache: ${key} = ${cache.get(key)}`);
                return cache.get(key);
            }

            const result = fn(...args);
            cache.set(key, result);
            console.log(`Record to cache: ${key} = ${result}`, cache);

            return result;
        }
    }

    const sum = (a, b) => a + b;

    const memoSum = memoize(sum);
    memoSum(1,2);
    memoSum(1,2);
    memoSum(3,2);
    memoSum(2,2);
    memoSum(3,2);
    memoSum(1,2);

})();