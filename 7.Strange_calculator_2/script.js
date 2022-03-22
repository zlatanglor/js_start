'use strict';
const mathOperation = prompt('Выберите математическое действие: "add", "sub", "mult", "div"');
const a = +prompt('Число "a"');
const b = +prompt('Число "b"');
if (mathOperation === 'add'){
    const add = a + b;
    alert(`Результат сложения: ${a} + ${b} = ${add}`);
} else if (mathOperation === 'sub'){
    const sub = a - b;
    alert(`Результат вычетания: ${a} - ${b} = ${sub}`);
} else if (mathOperation === 'mult'){
    const mult = a * b;
    alert(`Результат умножения: ${a} * ${b} = ${mult}`);
} else if (mathOperation === 'div'){
    const div = a / b;
    alert(`Результат деления: ${a} / ${b} = ${div}`);
} else {
    alert('Не верное действие')
}