'use strict';

(function () {

    const getCounter = () => {
        let num = 0;
        let inc = 0;
        let dec = 0;
        let get = 0;

        const increase = (i = inc) => {
            inc += 1;
            return num += 1;
        }

        const decrease = (i = dec) => {
            dec += 1;
            return num -= 1;
        }

        const value = () => {
            console.log(num);
        }

        const reset = () => {
            num = 0;
            inc = 0;
            dec = 0;
            get = 0;
            console.log('reset')
        }

        const getStatistic = (i = get) => {
            get += 1;
            const statistic = {
                increase: inc,
                decrease: dec,
                getStatistic: get
            };
            console.log(statistic);
        }

        return {
            increase,
            decrease,
            value,
            reset,
            getStatistic
        }
    }
    
    const counter = getCounter();
    counter.value();
    counter.increase();
    counter.increase();
    counter.increase();
    counter.decrease();
    counter.value();
    counter.getStatistic();
    counter.reset();
    counter.value();
    counter.getStatistic();
    counter.increase();
    counter.decrease();
    counter.getStatistic();
    counter.reset();
    counter.getStatistic();
    counter.value();

})();