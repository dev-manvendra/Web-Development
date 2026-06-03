// Singelton Objects

const app_user = new Object(); // this is called singleton object.

// we can assign values to it 

app_user.id = "125newId";
app_user.name = "Username";
app_user.isLoggedIn = false;

console.log(app_user);

// We can also do nesting in objects

const new_user = {
    email : "some@gmail.com",
    fullname : {
        firstName : "Jaskrit",
        middleName : "Singh",
        lastName : "Ranghi"
    }
}
console.log(new_user.fullname);
console.log(typeof new_user.fullname); // As expected, it shows object.
console.log(new_user.fullname.firstName); // we can access the values as an object.

// Concatinate two or more objects

const ob1 = {0 : 'a', 1 : 'b'}
const ob2 = {3 : 'a', 5 : 'b'}
const ob3 = {4 : 'a', 6 : 'b'}

const new_ob = Object.assign(ob1, ob2) // here ob1 is target (which mean all value of ob2 assign in ob1) and ob2 is sorce.
// no. of source can be increase but there is only one target (which is first objects).
// To avoid changes in first objects,we pass an empty object as target
const new_ob2= Object.assign({}, ob2, ob3)

console.log(new_ob);
console.log(ob1);

console.log(new_ob2);

console.log(app_user);

console.log(Object.keys(app_user)); // display only keys(data type : array).
console.log(Object.values(app_user)); // display only values(data type : array).
console.log(Object.entries(app_user)); // Entry is a pair of key and value(data type : array).

// // It is also a important method
console.log(app_user .hasOwnProperty(name)); // return boolean type data for asked question.

const ob = {
    first_name : "Manvendra",
    last_name: "kushwaha"
    
}
const {first_name : fn} = ob
console.log(fn);
const {last_name : ln} = ob
console.log(ln);



