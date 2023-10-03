interface User {
    name: string,
    _id: string,
    getCoupons(name:string): number
};
interface Admin extends User {
    role:string,
}
interface Admin {
    isLoggedIn:boolean
}
//THE MAIN DIFFRENT BETWEEN INTERFACE AND TYPE IS THAT YOU CAN RE OPEN THE INTERFACE