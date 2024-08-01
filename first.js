const array = ['apple', 'banana', 'cherry'];
let result = [];
array.map((item) => {
    result.push(item.toUpperCase());
})

console.log(result);