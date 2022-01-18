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