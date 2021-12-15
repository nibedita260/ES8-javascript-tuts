//ES6-promise
// function fnTimeConsumingWork(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//           resolve('response is:2 seconds have passed')
//        }, 2000);
//     })
//  }

//  fnTimeConsumingWork().then(resp=>{
//     console.log(resp)
//  })
//  console.log('end of script')

 //ES8 AsyncAwait
 function fnTimeConsumingWork(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
          resolve('response is:2 seconds have passed')
       }, 2000);
    })
 }
 async function my_AsyncFunc(){
    console.log('inside my_AsyncFunc')
    const response = await fnTimeConsumingWork();// clean and readable
    console.log(response)
 }
 my_AsyncFunc();
 console.log("end of script")

 function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          resolve(n1 + n2)
       } else
          reject('NOT_Postive_Number_Passed')
    })
    return p;
 }
 async function addInSequence() {
    let r1 = await add_positivenos_async(10, 20)
    console.log("first result", r1);
    let r2 = await add_positivenos_async(r1, r1);
    console.log("second result", r2)
    let r3 = await add_positivenos_async(r2, r2);
    console.log("third result", r3)
    return "Done Sequence"
 }
 addInSequence().then((r)=>console.log("Async :",r));
 console.log('end')