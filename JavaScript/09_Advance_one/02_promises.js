const promiseOne = new Promise((resolve, reject)=>{

    //
    setTimeout(() => {
        console.log("Asynchronous task is completed")
        resolve()
    },3000);

})

promiseOne.then(()=>
{
    console.log("promises consumed");
})