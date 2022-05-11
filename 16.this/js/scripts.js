'use strict';

(function () {

    const calculator = {
        read() {
            this.a = +prompt();
            this.b = +prompt();
        },
        sum() {
            if (isNaN(calculator.a) || isNaN(calculator.b)) {
                return 'Введи число'
            }
            return calculator.a + calculator.b
        },
        mul () {
            if (isNaN(calculator.a) || isNaN(calculator.b)) {
                return 'Введи число'
            }
            return calculator.a * calculator.b
        }
    }

    calculator.read();
    console.log(calculator.sum())
    console.log(calculator.mul())

})();