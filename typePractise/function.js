// // //+++++++++++++++++++
// // const add = (a: number,b:number):number => a+b
function Data(data) {
    return " this is pern is ".concat(data.name, " and that bussiness conatct ").concat(data.phone, " and user mail ").concat(data.email, " and user password ").concat(data.password);
}
var uData = {
    name: "arpit",
    email: "arpit.com",
    password: "demo1234",
    phone: 1234567890
};
console.table(Data(uData));
