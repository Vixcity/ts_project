// 简单的求和逻辑
function getSum(numArr: number[]) {
    let sum: number = 0
    for (let i: number = 0; i < numArr.length; i++) {
        sum += numArr[i]
    }
    console.log(sum)
}

// 1. 声明函数
// 2. 调用函数
// 3. 不调用函数函数里面的代码不会执行
// 4. 参数也需要添加类型
// 5. 参数可以有多个，需要用英文状态下的逗号来分隔
// function 函数名称 (){
//    函数体
// }

function fn(): number{
    return 18
}