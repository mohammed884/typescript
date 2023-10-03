function detectType(val:string | number) {
    if (typeof val === "number") return val.toFixed
    else return val.toLocaleLowerCase()
}
function provideId(id: string | null) {
    if (!id) return console.log("Please Provide an id");
};
interface User {
    usernames: string;
    password: string;
    email: string;
}
interface Admin extends User {
    isAdmin: boolean;
}
function accountType(account:User | Admin) {
    if ("isAdmin" in account) return account.isAdmin;
    else return false
};
//
