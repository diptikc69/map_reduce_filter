// const items = [
//     {name : 'Apple',price : 1},
//     {name : 'Mango', price : 2},
//     { name : 'Litchi', price : 3}
// ]

// let totalPrice = 0;

// items.forEach(item => {
//     totalPrice = totalPrice + item.price;
// }
// )
// console.log(totalPrice);
// const items = [1, 2, 3, 1, 2, 3,7,8,7];

// const noDuplicateItems = items.reduce((accumulator, item)=>{
//     if(!accumulator.includes(item)){
//         accumulator.push(item);
//     }
//     return accumulator;
// }, []);

// console.log(noDuplicateItems);

// const sports = ["ball", "bat", "ball", "bat","golf","tennis", "badmintion"];

// const sport = sports.reduce((acc, curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc;
// }, []);

// console.log(sport);

// const users = [
//     {firstName : "jhon", lastName : "Biden", age : 26},
//     {firstName : "jimmy", lastName : "cob", age : 75},
//     {firstName : "sam", lastName : "lewis", age : 50},
//     {firstName : "ronald", lastName: "Mathew", age: 23}
// ];

// const output = users.map((x)=>{
//     return x.firstName+" "+x.lastName;
// })
// console.log(output);


// const arr = [1,2,3,1,1,2,4,5,6,4,5,6];

// const array = arr.reduce((acc,curr) =>{
//     if(!acc.includes(curr)){
//         acc.push(curr);
//     }
//     return acc;
// }, []);
// console.log(array)

// const details = [
//     {firstName : "Dipti", lastName : "KC", age: 22},
//     {firstName : "Rabina", lastName : "Ghimire", age: 23},
//     {firstName : "Rusma", lastName : "Khadka", age: 24}
// ];

// const detail = details.map((del)=>{
//     return del.firstName+" "+del.lastName;
// });
// console.log(detail);

// let student = [
//     {name: "Rabina Ghimire", rollNumber : 123, marks: 45},
//     {name: "Dipti KC", rollNumber: 201, marks: 70},
//     {name: "Rusma Khadka", rollNumber: 301, marks: 56}
// ];

// const details = student.filter((x)=>
//     x.marks > 60 && x.rollNumber > 15
// );

// console.log(details);


let details =[
    {name: 'Dipti KC', address: 'Sinamangal', age:22},
    {name: 'Diya KC', address: 'airport', age:22},
    {name: 'Dipti KC', address: 'Sinamangal', age:22}
];

const vara = details.filter((x)=>
x.address.includes("Sinamangal")
);

console.log(vara);