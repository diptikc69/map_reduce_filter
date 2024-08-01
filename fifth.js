// Q1. Given an array of objects users, print fullname.

// let users = [
//     {firstName: "Rabina", lastName: "Ghimire", age: 23},
//     {firstName: "Dipti", lastName: "K.C.", age: 22},
//     {firstName: "Rusma", lastName: "Khadka", age: 22}
// ];

// const use = users.map((user)=>{
//     return user.firstName+" "+user.lastName;
// })

// console.log(use);

// Q3.Print object having marks greater than 60 and rollNumber greater than 15.

// let students =[
//     {name:"john", rollNumber: 31, marks: 80},
//     {name:"voh", rollNumber: 15, marks: 65},
//     {name:"newton", rollNumber: 16, marks: 35},
//     {name:"newton", rollNumber: 7, marks: 45}
// ];

// const student = students.filter((stu)=>{
//     return stu.marks>60 && stu.rollNumber>15;
// });

// console.log(student);

// Q4.Print sum of marks of all the student

// let students =[
//     {name: "Ram", age:21, marks: 80},
//     {name: "Shyam", age:22, marks: 60},
//     {name: "hari", age:20, marks:30}
// ];

// const student = students.reduce((acc,curr)=>{
//     return acc = acc + curr.marks;
// }, 0);
// console.log(student);

// Q5.List of all firstName from array whose age is more than 30

// let names = [
//     {firstName: "Rusma", lastName: "Khadka", age: 21},
//     {firstName: "Rabina", lastName: "Ghimire", age: 22},
//     {firstName: "Rabin", lastName: "Ghimire", age: 45},
//     {firstName: "Rabina", lastName: "Ghimire", age: 70}
// ];

// const output = names.filter((x)=>
//     x.age>30
// ).map((x)=> x.firstName);
// console.log(output);

// Q6.Print the names of students who scored more than 60

// let students = [
//     {name: "Ram", rollNumber: 15, marks: 65},
//     {name: "Shyam", rollNumber: 13, marks: 50},
//     {name: "Hari", rollNumber: 16, marks: 70},
// ];

// const student = students.filter((x)=>
//     x.marks > 60
// ).map((x)=> x.name);
// console.log(student);




// let students = [
//     { name: "john", rollNumber: 31, marks : 65},
//     { name: "josn", rollNumber: 21, marks : 35},
//     { name: "ram", rollNumber: 1, marks : 70},
//     { name: "smith", rollNumber: 11, marks : 35},
//     { name: "hari", rollNumber: 10, marks : 70},
//     { name: "gautam", rollNumber: 12, marks : 90},
//     { name: "sita", rollNumber: 32, marks : 100},
//     { name: "rita", rollNumber: 14, marks : 87}
// ];

const items =[
    {name: 'Apple', price: 1},
    {name: 'Mango', price: 2},
    {name: 'Orange', price:3},
    {name: 'Orange', price:4}

];

const totalPrice = items.reduce((acc,item)=>{
    console.log(acc);
    return acc = acc + item.price;
}, 0);

