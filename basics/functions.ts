function addTwo(num:number) {
    return num + 2;
}
function getUpper(value:string):string {
    return value.toUpperCase();
}
function signUser(name:string, email:string,isPaid:boolean =false):object {
    return {name, email}
}
const arrowFunction = (name:string):string => (`hi ${name}`)
signUser("hi", "nice")

export {};