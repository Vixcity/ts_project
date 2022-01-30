// 题目
// type MyReadonly<T> = any

// 题目要求解读 => 添加上readonly
// interface User {
//     readonly name: string
// }

// JS 的解法
// function myReadOnly(obj){
//     const result = {}

//     for (const key in obj) {
//         result['readonly' + key] = obj[key]
//     }

//     return result
// }
// 思路
// 返回一个对象
// 遍历 obj  => (js:对象，ts:接口)
// 加上 readonly 关键字
// 通过 key 来获取接口里面的值

// ts解法
// keyof 循环接口
type MyReadonly<T> = {
   readonly [P in keyof T]:T[P]
}