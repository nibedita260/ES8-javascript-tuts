const student ={
    firstName:'Kannan',
    lastName:'Sudhakaran'
 }
 console.log(Object.entries(student))
 console.log(Object.values(student))

 const marks = [10,20,30,40]
   console.log(Object.entries(marks))
   console.log(Object.values(marks))

   const employee = {
    firstName : 'Mohtashim',
    lastName: 'Mohammad',
    get fullName(){
       return this.firstName + ':'+ this.lastName
    }
 }
 console.log(Object.getOwnPropertyDescriptors(employee))