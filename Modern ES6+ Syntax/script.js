//Arrow Fuctions
//Older way of writing functions
function AddNumbers(a, b) {
    return a + b;
}
AddNumbers(5, 10)
//new way using arrow function
const addNumber = (a, b) => {
    return a + b
}
addNumber(5, 10)

//shorter method also using arrow functions
const addTwoNumber = (a, b) => a + b; //short hand method
addTwoNumber(5, 10)

//Template Literal ``
//older way of combining string
let firstName = "John"
let lastName = "Doe"
let age = 25;


console.log("My name is " + firstName + " " + lastName + " and I am learning Software development. I am so excited to be here!!. I am " + age + " years Old")
console.log("my name is ", firstName, lastName, "I am ", age)
//using template literal
console.log(`My name is ${firstName} ${lastName} and I am learning Software development.
     I am excited to be here. I am ${age} years old. `)
console.log(`I am ${25 + 5}`)

//Destructuring Objects
let student = { name: "Jane Doe", isStudent: true, city: "Nyeri" };

//accessing object properties using the old way
const oldName = student.name;
const oldIsStudent = student.isStudent
const oldCity = student.city;
console.log(oldName)
//access object properties using the destructuring method
const { name, isStudent, city } = student;
console.log(name)

//Destructuring and Array
const colors = ["red", "green", "blue"];

const [first, second] = colors;
console.log(first);

//THE SPREAD OPERATOR
const students = ["Sam", "Ivy", "Paul", "Esther"];

//dislaying the elements using a for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

//spread operator to display
console.log(...students)

//adding another element at the end array 
students.push("Pauline")
console.log(...students)
//adding and element using the spread operator
const AllStudents = [...students, "David"]
console.log(AllStudents)

//Spread operator on Object
//let student = { name: "Jane Doe", isStudent: true, city: "Nyeri" };

let updatedStudent = { ...student, course: "Software Development" };
console.log(updatedStudent)

//Rest Parameter
//create a function to calculate the sum of n numbers
function sum(...numbers) {
    let total = 0;
    //[10, 30, 40, 50 , 60]
    for (const n of numbers) {
        total += n;
    }
    return total;
}

console.log(sum(10, 30, 40, 50, 60))
console.log(sum(1, 3, 4, 5))
console.log(sum(40, 50, 60))

//Default function parameters

function sayHi(name = "there") {
    return `Hi ${name}`
}

console.log(sayHi("John"));


//Optional Chaining
const user = { address: { city: "Nyeri", street:"123 street" } }
const guestUser = {};

console.log(user.address.city)

console.log(guestUser.address?.city)

//Coaleasing

let count = 0;
console.log(count || 10)
console.log(count ?? 10)

let isLoggedIn = true

isLoggedIn ?? "User is logged In";
console.log(isLoggedIn)

