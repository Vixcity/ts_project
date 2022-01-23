let person: {
    name: string;
    age:number;
} = {
    name:'老刘',
    age:18
}

let person1: {
    name: string;
    age:number;
    fun: () => void
}

person1 = {
    name:'老刘',
    age:18,
    fun:function (){}
}

let p3:{
    sum:(sum1: number,sum2:number) => number
} = {
    sum:function (sum1,sum2){
        return sum1+sum2
    }
}

interface PersonObj {
    name:string,
    age:number,
    height:number,
    weight:number
}

let person11 : PersonObj = {
    name:"11",
    age:20,
    weight:70,
    height:180
}

//  数组对象
// push , foreach , some
let arr:string[] = ['asd','222','333','444']

let obj :PersonObj[] = [{
    name:"11",
    age:20,
    weight:70,
    height:180
}]

// 不需要为实参进行类型注解
let nums:number[] = [1,2,3,5,4,8,6,12,354,68,4,68,34,4783]
nums.some(function (num:number) {
    if(num>10){
        return true
    }
    return false
})