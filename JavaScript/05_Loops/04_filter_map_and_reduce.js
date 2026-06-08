const coding = ["Python", "JavaScript","Java", "c++"]

// coding.forEach(element => {
//     console.log("elements is :", element);
// });
// foreach method does not return actual value

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Ther are some methods that take call back function and return value.

///////////////////////// 1. filter() ////////////////////////////////////////////////////

const num = [1,2,3,4,5,6,7,8,9,10]

let newnum = num.filter((n)=> n>4 ) // this method filter the data according to giving condition.

console.log(newnum); 

