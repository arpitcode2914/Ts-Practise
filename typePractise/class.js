// class Register {
//     name:string
//     email:string
//     password:string
//     age:number
//     constructor ( name:string,email:string,password:string,age:number){
//         this.name =email
//         this.email =name
//         this.password =password
//         this.age= age
//     }
//     uData():string {
//             return `my name is ${this.name} i ${this.age} old and my email is ${this.email} after using my password ${this.password}`
//     }
// }
// const data = new Register ("arpit","demo.com","1234",21)
// console.log(data.name);
// console.log(data.age);
// console.log(data.email);
// console.log(data.password);
// console.log(data.uData());
// console.log(data);
var Student = /** @class */ (function () {
    function Student(name, std, rollNO, subject) {
        this.name = name;
        this.std = std;
        this.rollNO = rollNO;
        this.subject = subject;
    }
    return Student;
}());
var sData = new Student("arpit", 6, 2, "p.t");
console.table(sData);
