var obj= {num:4};

var functionName=function(a,b,c)
{
    return this.num+a+b+c;
}
// CALL
const a1=functionName.call(obj,1,2,3);
console.log(a1); //output: 10

// APPLY
const arr=[4,5,6];
const a2=functionName.apply(obj,arr); //apply jab use karna hai jab array de rhe hain as argument.
console.log(a2); //output: 19

// BIND, ISI KO CURRYING BHI KEHTE HAIN
var bound= functionName.bind(obj); //ye ek function return kar deta hai jisme obj chipka hoga, function name will be bound.
const a3=bound(7,8,9);
console.log(a3); //output:28
//.................................................

var student={age:11};
const function1= function()
{
    console.log(this.age);
}
var binding=function1.bind(student);
const a4=binding();
//..................................................

// closure
function multiply(x)
{
    return function(y){
        console.log(x*y);
    }
}
var multi=multiply(2);
multi(4); //this will remember y.




