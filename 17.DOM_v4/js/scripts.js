'use strict';

(function () {

    const createTable = (row, column) => {

        const table = document.createElement('table')
        let num = 0;

        for (let i = 1; i <= row; i++) {
            const tr = document.createElement('tr');
            table.append(tr);
            for (let j = 1; j <= column; j++) {
                const td = document.createElement('td');
                num += 1;
                td.innerHTML = num;
                tr.append(td);
            }
        }

        document.body.prepend(table);
        return table;

    }

    createTable(10, 10)

})();