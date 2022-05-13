'use strict';

(function () {

    const obj = {
        brand: 'Apple',
        model: 'iPhone 11'
    };

    brandModel.bind(obj, 500)(100);

    function brandModel (price, args) {
        console.log(`${this.model} by ${this.brand}, price ${price}, art ${args}`)
    }

    function bind (fn, ctx, ...rest) {
        return function (...args) {
            const bind = 'bind';

            ctx[bind] = fn;

            const   result = ctx[bind](...rest.concat(...args));

            delete ctx[bind];

            return result;
        }
    }

    bind(brandModel, obj, 500)(100);

})();