"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log(user);
    return { created: true };
}
var user = { name: "m", email: "string", isPaid: true, g: true };
console.log(createUser(user));
