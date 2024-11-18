// // // // // const userName:string="arpit"
// // // // // console.log(userName);
// // // // type User = string | number
// // // // const uName:User = "krishna" +" " +  21
// // // // console.log(uName);
// // // // type Data={
// // // //     name:string
// // // //     age:number
// // // // }
// // // // const uData:Data={
// // // //     name:"arpit",
// // // //     age:21
// // // // }
// // // // console.table(uData);
// // // //interface
// // // interface Register{
// // //     name:string
// // //     email:string,
// // //     password:string
// // // }
// // // interface Login extends Register{
// // //         phone:number
// // // }
// // // const uForm :Login ={
// // //     name:"arpit",
// // //     email:"demo.com",
// // //     password:"demo1234",
// // //     phone:123456789
// // // }
// // // console.table(uForm);
// // // // same in type 
// // type Register ={
// //     name:string,
// //     email:string,
// //     age:number
// // }
// //  type Login = Register &{
// //     password:string,
// //     phone:number
// //  }
// //  const uForm:Login={
// //     name:"krishna",
// //     email:"krishna.com",
// //     password:"krishna1234",
// //     age:21,
// //     phone:1234567890
// //  }
// //  console.table(uForm);
// //  console.log(uForm);
// type Friends = "arpit" |"krishna" |"dwarka" |"narayan"|"kesav"
// const uData:Friends ="arpit"
//intersection types
var uData = {
    name: "arpit",
    email: "arpit.com",
    password: 1234,
    // graduate:false,
    age: 21
};
console.table(uData);
