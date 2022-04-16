'use strict';
//1
let arr = [1, 2, 3];
const arr2 = [4, 5, 6];
Array.prototype.push.apply(arr, arr2);
console.log(arr);

//2
arr = [1, 2, 3];
arr.reverse();
console.log(arr);

//3
arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//4
arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

//5, 6
arr = ['js', 'css', 'jq'];
console.log(arr[0]);
console.log(arr[arr.length-1]);

//7
arr = [1, 2, 3, 4, 5];
arr.push([1, 2, 3]);
console.log(arr);

//8
arr = [1, 2, 3, 4, 5];
arr.push([4, 5]);
console.log(arr);

//9
arr = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr);

//10
arr = [1, 2, 3, 4, 5];
arr.push([2, 3, 4]);
console.log(arr);

//11
arr = [1, 2, 3, 4, 5];
arr.splice(3,0, 'a', 'b', 'c');
console.log(arr);

//12
arr = [1, 2, 3, 4, 5];
arr.splice(1,0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.push('e');
console.log(arr);

//13
arr =  [3, 4, 1, 2, 7];
arr.sort((a, b) => a - b);
console.log(arr);

//14
arr = [5, 6, 7, 8, 9];
let sum = arr.reduce((sum, current) => sum + current);
console.log(sum);

//15
arr = [5, 6, 7, 8, 9];
sum = arr.map(item => item**2);
console.log(sum);

//16, 17
arr = [1,-3, 5, 6,-7, 8, 9,-11];
let res = arr.filter(item => item < 0);
console.log(res);
res = arr.filter(item => item % 2 === 0);
console.log(res);

//18
arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
res = arr.filter(item => item.length > 5);
console.log(res);

//19
arr = [1, 2, [3, 4], 5, [6, 7]];
res = arr.filter(Array.isArray);
console.log(res);

//20
arr =  [5,-3, 6,-5, 0,-7, 8, 9];
res = arr.filter(item => item < 0);
console.log(res.length);