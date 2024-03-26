console.log('hello world');

var myString:String="HELLO WORLD";



var myNumber:number=500;
var myBool:boolean=false;


var myVar:any="Gato"
myVar=false;



//string mostrar pòr navegador
//document.write(myNumber.toString());


//Arrays


var StringArray:String[]=["H","O","L","A"];
var NUMBERArray:Number[]=[121,23445,4353,3453];
var booleanAray:boolean[]=[false,true];

var AnyAarray:any[]=[false, 2342, "Hola" , {}];



//tuple

var stringTuple:[string ,number];
stringTuple=["Helloo", 23];  /// como ya defini antes los dos tipos de datos posibles ahgora me los pide

//stringTuple=[23,"Javier"] //=== ESTO DA ERROR ===



//============VOID , UNDEFINED ,null==============

//====let sirve para poder no cambiar la variable del escope=== con var se pierde 
//==== const es una constante 


let myVoid:void=undefined;

let mynull:null=null;
let myundefined:undefined=undefined

//document.write(typeof(stringTuple));




//========FUNCTIONS============



function getNum(n1:number,n2:number):number{
    return n1 +n2
}


let mySum=function(n3 :number | string ,n4 :number | string ):number{
   if(typeof(n3)==='string')
   {
    n3=parseInt(n3)
   }
   if(typeof(n4)==='string')
   {
    n4=parseInt(n4)
   }

   return n3+n4

}




///otra


const getName=(firstName:string,lastName?:string)=>{
    
    return `${firstName} ${lastName}` 
}


getName('Ariel');


//document.write(getName("Jesus","Nazaret"))



//===========INTERFACES===========

interface ITodo
{
    title:string,
    text:string
}


function showTODO(todo:ITodo){
    console.log(`${todo.title} ${todo.text}`)
}

showTODO(
    {
        title:"game the thornos",
        text:"version español"

    }
)

//EN ESTE CASO CREE UNA VARIABLE DE OBJETO DE TIPO ITODO
var myTodo:ITodo={title:"MUEJSRES ARGENTINAS" ,text:"AUTOR TITO DOMINA"}




//==========clasess===




//====interface
export interface UserData{
    name: String;
    
     age:Number;
   


     Message():void;
}


class User implements UserData  {
    
    name:String;
    age:Number;
   constructor(name:String,age:Number)
   {
        this.name=name;
        this.age=age;
   }

   Message(){
     console.log(`my name is ${this.name} and my age is ${this.age} `)
   }
}


 let user1=new User("Santiago",35);

console.log(user1.Message())
