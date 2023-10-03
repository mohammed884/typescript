class User {
    email: string
    name: string
    private value:string = "private !";
    constructor(email:string,name:string) {
        this.email = email;
        this.name = name
    }
    get getEmail():string { return this.email; }
    set isVaildEmail(res:string) {
        // if (res === "yes") 
    }
    //in setter you can't put a return type
};
const mohammed = new User("m@.com","mohammed");
console.log();
