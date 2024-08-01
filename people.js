const people = [
    {
      id: "001",
      name: "John Doe",
      email: "john.doe@example.com",
      address: "Pokhara, Nepal",
      age: 28,
      vehicles: ["Car", "Motorcycle"]
    },
    {
      id: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "Kathmandu, Nepal",
      age: 34,
      vehicles: ["Car", "Bicycle", "Truck"]
    },
    {
      id: "003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: "Biratnagar, Nepal",
      age: 25,
      vehicles: [ "Bicycle"]
    },
    {
      id: "004",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      address: "Kathmandu, Nepal",
      age: 45,
      vehicles: ["Motorcycle", "Truck"]
    },
    {
      id: "005",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      address: "Pokhara, Nepal",
      age: 30,
      vehicles: ["Car", "Motorcycle", "Bicycle"]
    },
    {
      id: "006",
      name: "Diana Evans",
      email: "diana.evans@example.com",
      address: "Biratnagar, Nepal",
      age: 22,
      vehicles: ["Car", "Bicycle", "Scooter"]
    },
    {
      id: "007",
      name: "Eve Foster",
      email: "eve.foster@example.com",
      address: "Pokhara, Nepal",
      age: 40,
      vehicles: ["Car", "Truck", "Motorcycle"]
    },
    {
      id: "008",
      name: "Frank Green",
      email: "frank.green@example.com",
      address: "Kathmandu, Nepal",
      age: 50,
      vehicles: ["Car", "Bicycle"]
    },
    {
      id: "009",
      name: "Grace Harris",
      email: "grace.harris@example.com",
      address: "Biratnagar, Nepal",
      age: 27,
      vehicles: [ ]
    },
    {
      id: "010",
      name: "Henry King",
      email: "henry.king@example.com",
      address: "Pokhara, Nepal",
      age: 37,
      vehicles: ["Car", "Truck", "Bicycle", "Motorcycle"]
    }
  ];


// Q.No.1  How can you create an array of all the names from the people array?
// let names = [];
// people.map((person) => {
//     names.push(person.name);
// });

// console.log(names);


// Q.No.2 How can you create an array of all the email addresses from the people array?
// let emails = [];
// people.map((person) => {
//     emails.push(person["email"]);
// });

// console.log(emails);

// 3. How can you create an array of arrays, where each sub-array contains the types of vehicles a person owns?
// let vehiclesArr = [];
// people.map((person) => {
//   if(person.vehicles.length > 0){
//     vehiclesArr.push(person["vehicles"]);
//   }
// });
// console.log(vehiclesArr);

// 4. How can you filter out the people who are older than 30 years?
// let result = [];
// people.filter((person) => {
//     if (person.age > 30) {
//         // result.push(person);
//         result.push({name : person.name, age : person.age });
//     }
// });

// console.log(result);

// 5. How can you filter out the people who own more than one vehicle?
// let result = [];
// people.filter((person) => {
//     if(person.vehicles.length > 1) {
//         result.push(person);
//     }
// });

// console.log(result);


// 6. How can you get the names of people who are older than 30 years?
// let result = [];
// people.filter((person) => {
//     if (person.age > 30) {
//         result.push(person.name);
//     }
// });
// console.log(result);


// 7. How can you get the email addresses of people who own a truck?

// const emailAddress = people.filter(person => person.vehicles.includes("Truck")).map(person => person.email);
// console.log(emailAddress);

// 8. How can you get the IDs of people who do not own any vehicles?
// let idsNoVehicles = people.filter(person => person.vehicles.length === 0).map(person => person.id);

// console.log(idsNoVehicles);

// 9. How can you find the names of people living in a specific city, say "Kathmandu, Nepal"?

// const namesInkathmandu = people.filter(person => person.address === "Kathmandu, Nepal")
// const finalKTM = namesInkathmandu.map(person => person.name);
// console.log(finalKTM);


// 10. How can you calculate the total number of vehicles owned by all the people combined?

// let totalVehicle = people.reduce((total, person) => {
//  return  total + person.vehicles.length}, 0);
// console.log(totalVehicle);

// 11. How can you find the average age of the people in the array?

// let totalAge = people.reduce((sum,person) => 
//   sum + person.age,0);
// const averageAge = totalAge/ people.length;

// console.log(averageAge);