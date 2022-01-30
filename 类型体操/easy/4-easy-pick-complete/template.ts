// 题目
// type MyPick<T, K> = any


// js 的思想去解答 ts 的题目
// 对比学习法 => 通过已知的老知识理解新知识

// JS的思路
// function myPick (todo, keys){
//     let obj

//     keys.forEach(key => {
//         if(key in todo){
//             obj[key] = todo[key]
//         }
//     });

//     return obj
// }

// 返回一个对象
// 遍历 foreach
// 取值
// 判断

// 解法

// ts联合类型union
// K extends keyof T 代表说K一定是在T里面的
// extends 类型约束
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}