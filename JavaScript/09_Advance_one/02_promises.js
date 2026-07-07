// const promiseOne = new Promise((resolve, reject)=>{

//     //
//     setTimeout(() => {
//         console.log("Asynchronous task is completed")
//         resolve()
//     },3000);

// })
// promiseOne.then(()=>
//     {
//         console.log("promises consumed");
//     }
// )
    
let msg = "this is first message";
const new_promise = new Promise((resolve, reject)=>{
    let i = 0;
    let setTimer = setInterval(()=>{
        console.log(msg[i]);
        i++;
        if(i == msg.length)
        {
            clearInterval(setTimer);
            setTimer = null;
        }
        
    },500)
}
)
new_promise.then(()=>{
    console.log("Task complete");
})