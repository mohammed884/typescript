type User = {
    readonly _id:string,
    name: string, 
    email: string, 
    isPaid: boolean,
    isLoggedIn(): boolean
}
// with readonly option you can't modify the readonly value 
// ? mark means that the field is optional (creaditCard?:number)

type coderAge = {
    age: number,
}
type coderName = {
    name:string,
}
type coderEmail = {
    email:string,
};
type coderDetails = coderAge & coderName & coderEmail;
// using the & operator to merge more than one type
function createUser(user:User):{created:boolean} { 
    return {created:true}
}
const user = {name: "m", email: "email", _id:"23",isPaid: true, };
//passing a user stored in a variable will not allow you to add fileds that don't exsits in the parameters list 
//but passing it directly will allow you to add fileds that do not exist in the
// console.log(createUser(user));




export {}