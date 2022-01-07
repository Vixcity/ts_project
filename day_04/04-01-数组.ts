let names: string[] = ['迪丽热巴', '古力娜扎', '马尔扎哈']
console.log(names)

// 创建数组,数组中类型注解是由 类型 + [] 组成的
// 数组中的每一项内容被称为元素
// 1. let names : string[] = []
// 2. let names : string[] = new Array()

// 往数组中添加元素，根据索引是否存在区分的，如果索引不存在，那么就添加元素
// 添加元素的通用写法：数组名称[数组长度] = 新值

// 寻找数组中的最大值
let arr: number[] = [-1,1,3,45]
let max:number = arr[0]
for (let i = 0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)