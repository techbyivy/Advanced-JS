//synchronous js
//A task execution must first finish before the next one starts
console.log("first")
console.log("second")
console.log("third")

//Asynchronous
//some tasks can finish their execution later
console.log("start")
setTimeout(() => {    //used for delaying a task for some seconds
    console.log("task completed")
}, 3000)  //equivalent to 3s
console.log("end")

