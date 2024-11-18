// // // // //+++++++++++++++++++
// // // // const add = (a: number,b:number):number => a+b


// // // // console.log(add(5,5));

// // // // //-----------------------------------
// // // // const sub = (a:number,b:number) => a-b


// // // // console.log(sub(8,4));


// // // // //******************* */
// // // // const mul = (a:number,b:number) => a*b


// // // // console.log(mul(8,4));

// // // // ////////////////////////////////
// // // // const div = (a:number,b:number) => a/b


// // // // console.log(div(8,4));


// // // const greet = (name:string ,age? :number) => `name: ${name} ,age: ${age ? age : "not found"} `


// // // console.log(greet("krishna"));


// // interface Register {
// //     name:string,
// //     email:string,
// //     password:string,
// //     phone:number
// // }

// // function Data(data:Register){
// //     return ` this is pern is ${data.name} and that bussiness conatct ${data.phone} and user mail ${data.email} and user password ${data.password}`
// // }

// // const uData:Register = {
// //  name:"arpit",
// //  email:"arpit.com",
// //  password:"demo1234",
// //  phone:1234567890

// // }

// // console.table(Data(uData));

// type Register = {
//     name:string
// }

// type Login ={
//     email:string,
//     password:number
// }

// type Data = Login | Register;


// function uData(value:Data){

//   console.log(`name is ${value.name}`);
  
    
// }