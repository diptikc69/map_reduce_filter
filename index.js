const array = [1,2,3,4,5];
let result = [];

array.map((number)=>{
    result.push(number ** 2)
})

console.log(result);

// const arr = ['apple', 'banana', 'cherry'];

// function fruits(arr){
//     return arr.toUpperCase();
// }

// const output = arr.map(fruits);
// console.log(output)

// const arr = [1,2,3,4,5,6];


// function isOdd(num){
//    return num % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// const arr = ['apple', 'banana', 'cherry', 'date', 'fig'];

// function filterLongerString(str){
//     return str.length > 5;
// }


// const output = arr.filter(filterLongerString);
// console.log(output);

// const arr = [1,2,3,4,5];

// function findSum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function(acc,curr){
//     acc = acc+curr;
//     return acc;
// });

// console.log(output);


// const arr = ['hello', 'world'];

// const concatenatedString = arr.reduce(function(acc, curr) {
//     return acc + curr;
// });

// console.log(concatenatedString); 







