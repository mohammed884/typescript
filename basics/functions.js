"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
var user;
function signUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email };
}
signUser("hi", "nice");
