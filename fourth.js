const array =[1,2,3,4,5];

function findSum(arr){
    let sum = 0;
    for (let i=0; i < findSum.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let res = 0;

array.reduce(function(acc,curr) {
    acc = acc + curr;
    res = acc;
    return res
},0);

console.log(res);