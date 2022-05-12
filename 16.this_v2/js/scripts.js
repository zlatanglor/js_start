'use strict';

(function () {

    const ladder = {
        step: 0,
        up: function() {
            this.step++;
            return ladder; //return this
        },
        down: function() {
            this.step--;
            return ladder; //return this
        },
        showStep: function() {
            console.log( this.step );
            return ladder; //return this
        }
    };

    ladder.up().up().showStep().down().showStep();

})();