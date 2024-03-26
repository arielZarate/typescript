"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hello world');
var myString = "HELLO WORLD";
var myNumber = 500;
var myBool = false;
var myVar = "Gato";
myVar = false;
//string mostrar pòr navegador
//document.write(myNumber.toString());
//Arrays
var StringArray = ["H", "O", "L", "A"];
var NUMBERArray = [121, 23445, 4353, 3453];
var booleanAray = [false, true];
var AnyAarray = [false, 2342, "Hola", {}];
//tuple
var stringTuple;
stringTuple = ["Helloo", 23]; /// como ya defini antes los dos tipos de datos posibles ahgora me los pide
//stringTuple=[23,"Javier"] //=== ESTO DA ERROR ===
//============VOID , UNDEFINED ,null==============
//====let sirve para poder no cambiar la variable del escope=== con var se pierde 
//==== const es una constante 
var myVoid = undefined;
var mynull = null;
var myundefined = undefined;
//document.write(typeof(stringTuple));
//========FUNCTIONS============
function getNum(n1, n2) {
    return n1 + n2;
}
var mySum = function (n3, n4) {
    if (typeof (n3) === 'string') {
        n3 = parseInt(n3);
    }
    if (typeof (n4) === 'string') {
        n4 = parseInt(n4);
    }
    return n3 + n4;
};
///otra
var getName = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
getName('Ariel');
function showTODO(todo) {
    console.log("".concat(todo.title, " ").concat(todo.text));
}
showTODO({
    title: "game the thornos",
    text: "version español"
});
//EN ESTE CASO CREE UNA VARIABLE DE OBJETO DE TIPO ITODO
var myTodo = { title: "MUEJSRES ARGENTINAS", text: "AUTOR TITO DOMINA" };
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.toString = function () {
        console.log("my name is ".concat(this.name, " and my age is ").concat(this.age, " "));
    };
    return User;
}());
var user1 = new User("Santiago", 35);
user1.toString();


