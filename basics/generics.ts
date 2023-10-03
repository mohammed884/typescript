const score:Array<number> = []; 
const names:Array<string> = []; 

function returnValue1(val:number | string):number | string {
    return val
}
function returnValue2(val:any):any {
    return val
}
function returnValue3<Type>(val:Type):Type {
    //using genrics the function will know what type was passed to the function
    //and the return value should be the same as the given value
    return val
}
returnValue3("nice")
//sugre syntax
function returnValue4<T>(val:T):T {
    //using genrics the function will know what type was passed to the function
    //and the return value should be the same as the given value
    return val
}
interface Bootle {
    brand:string,
    type:string,
}
function returnValue5<Bootle>(val:Bootle):Bootle {
    return val
}
//Arrays
function returnArray<T>(arg:T[]):T[] {
    return []
};
const arrowFunction = <T>(arg:T[]):T => {
    return arg[3]
}
//NOTE (WE USE , COMMA TO REFER TO THE <T> AS A GENERIC NOT A TAG)
const anotherOne = <T, U extends {username:string, email:string}>(user):U => {
    return user
}