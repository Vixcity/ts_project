let num: number = 12;
let num2: number = 32;

[num,num2] = [num2,num];
console.log("num:",num,'\nnum2:',num2);

let num3: number = 12;
let num4: number = 32;
let template: number;

template = num3;
num3 = num4;
num4 = template;

console.log(`\ntemplate:${template}\nnum3:${num3}\nnum4:${num4}`);

let u: undefined = undefined;
let n: null = null;

console.log(`\nn:${n}\nu:${u}`);