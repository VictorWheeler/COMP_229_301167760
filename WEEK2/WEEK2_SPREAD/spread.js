var myval = Math.max(1,2,3,4);
console.log(myval);

var myObj = {}
Object.assign(myObj,{a:1,b:2,c:3}, {x:1,y:2,z:3})
console.log(myObj);

var myarray = [5,4];
function sum(a, b)  //rest operation
{
        return a+b;
}

function sumN(...b)  //rest operation
{
    let sum = 0;
    for(const arg of b)
    {   
        sum = sum + arg;
    }
    return sum;
}
console.log(sum(...myarray))