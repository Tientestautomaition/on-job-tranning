import { copyFileSync } from "fs";

export { }

String
let name1 = 'ThuyTien';
console.log(`Hi hi hi ${name1}`)

Number
let y: number = 10

Boolean
let learningTypeScript: boolean = true


//Static type checking, prevent from making mistakes. Accurate Intellisense


//Undefined. A variable that has been declared but not yet assigned value
let u: undefined = undefined


//Null. Null is assignment value. Can be assigned as representation of no value
let n: null = null

//Arrays to work with array of values
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]
console.log(list2[0])

//Tuple for fixed values but different types
let x: [string, number]; // declare
x = ["hello", 10];    // initialize
console.log(x[0].substring(1)); // accessing

//Enum giving more friendly names to sets of values
enum Color { Red = 3, Green, Blue, }
let c: Color = Color.Green;
console.log(c)
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members

//Unknown. when describing a variable without knowing the type of values it may have to store
let notSure: unknown = "unknow";
console.log(notSure)

//Any .when not knowing the type of the value, can opt out of type checking using any
let anyValue: any;
anyValue = false
anyValue = true
console.log(anyValue)


//Union of Types Multiple types for same variable
let peopleAllowed: number | boolean
peopleAllowed = false
peopleAllowed = 10
console.log(peopleAllowed)

//Function
function hello() {
    console.log('hello')
}
hello;

function sum(num1: number, num2: number) {
    return num1 + num2
}
console.log(sum(2, 3))

function sum2(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2
    else
        return num1
}
console.log(sum2(4))

function sum3(num1: number, num2: number = 10): number {
    return num1 + num2
}
console.log(sum3(14))

//interface

interface employee {
    firstName: string,
    lastname: string,
    ID: number
}
function getEmployeeDetails(empDetails: employee) {

    console.log(empDetails.firstName);
    console.log(empDetails.lastname);
    console.log(empDetails.ID);
}

getEmployeeDetails({
    firstName: 'Thuy Tien',
    lastname: 'Nguyen',
    ID: 2097
})

//Classes
class Employee {
    employeeName!: string;
    hello(name: string) {
        console.log(`hello ${name}`)
    }
}
let emp1 = new Employee();
emp1.hello('Thuy Tien ne')