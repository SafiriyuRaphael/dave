// typescript is a strict type first in nature, so we need to define the type of the props that we are passing to the Header component. We can define an interface for the props and then use it in the component.

// lists of data types in typescript:
// - string
// - number
// - boolean
// - null
// - NaN
// - undefined
// - object
// - array
// - void
// - any
// - never  - this is a type that represents a value that never occurs. It is used to represent the return type of a function that always throws an error or never returns anything.
// - unknown - this is a type that represents a value that can be of any type. It is similar to the any type, but it is safer because it does not allow us to perform any operations on the value without first checking its type.

let data: string | number; // infered as string
data = ""; // this will give an error because we are trying to assign a number to a string variable. This is one of the main benefits of using typescript, it helps us catch errors at compile time rather than at runtime.
data = 0; // this is fine because we are allowing both string and number types in the variable.

let count: number; // infered as number
count = 0; // this is fine
// count = "0"; // this will give an error because we are trying to assign a string to a number variable.

let isActive: boolean; // infered as boolean
isActive = true; // this is fine
// isActive = "true"; // this will give an error because we are trying to assign a string to a boolean variable.

let items: number[];
items = []; // infered as array of any type
items = [1, 2, 3]; // this is fine

let items2: string[];
items2 = ["a", "b", "c"]; // this is fine
// items2 = [1, 2, 3]; // this will give an error because we are trying to assign an array of numbers to an array of strings variable.

let items3: (string | number | boolean)[];
items3 = ["a", "b", "c", 1, 2, 3, false]; // this is fine because we are allowing both string and number types in the array.

let user: { name: string; age: number | string | string[] };
user = { name: "John", age: 30 }; // this is fine
// user = {name: 'John', age: '30'}; // this will give an error because we are trying to assign a string to a number variable in the object.

let users: { name: string; age: number }[];
users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
]; // this is fine
// users = [{name: 'John', age: 30}, {name: 'Jane', age: '25'}]; // this will give an error because we are trying to assign a string to a number variable in the object.

// union types in typescript allow us to define a variable that can hold multiple types of values. We can use the pipe operator (|) to define a union type.

let firstname: "John" | "Jane" | "Jack"; // this is a union type, it allows only specific string values to be assigned to the variable.
firstname = "John"; // this is fine
firstname = "Jane"; // this is fine
// firstname = "Brian"; // this will give an error because we are trying to assign a string that is not in the union type to the variable.

let age: 30 | 25 | 20; // this is a union type, it allows only specific number values to be assigned to the variable.
age = 30;
age = 25; // this is fine
// age = 35; // this will give an error because we are trying to assign a number that is not in the union type to the variable.



let getName: () => string; // this is a function type, it allows us to define the type of the return value of the function.
getName = () => {
    let add = 1 + "1" // typescript can infer the type of the variable based on the value that is assigned to it. In this case, it will infer the type of add as number because we are assigning a number to it.
    return add;
}

let logMyName: () => void; // this is a function type, it allows us to define the type of the return value of the function. In this case, it is void because the function does not return anything.
logMyName = () => {
    console.log("My name is John");
    // return "THS IS A STRING"; // this will give an error because we are trying to return a string from a function that is defined to return void.
}

let add: (x: number, y: number) => number

add = (x, y) => {
    return x + y;
}

add(1, 2); // this is fine
// add("1", "2"); // this will give an error because we are trying to pass string arguments to a function that is defined to take number arguments.


let throwError: (message: string) => never; // this is a function type, it allows us to define the type of the return value of the function. In this case, it is never because the function always throws an error and never returns anything.
throwError = (message) => {
    throw new Error(message);
}


let stringValue = "David" as "David" | "Gray"//type assertion.
//It's basically you telling the compiler: "Trust me, I know what I'm doing—treat this value as this specific type.
stringValue = "Gray"

// let numericValue = 20  as boolean
// data = false as unknown as boolean

let anyData: any  // avoid using why -- because you come to typescript to avoid this but useing it limits the power of typescript

anyData = false
anyData = ""


/////////////////////////////////// type casting ////////////////////////
type NameProps = "David" | "Gray"

type UserDataProps = {
    key: string
    name: "Dave"
}[]

interface AddedNumberProps {
    favorites: string
    bestFriends: number
}

let myName: NameProps
// myName = "grey"

let myData: UserDataProps

myData = [{ key: "", name: "Dave" }]

let myOtherData: AddedNumberProps[]

myOtherData = [
    { favorites: "bread", bestFriends: 20 },
    { favorites: "bread", bestFriends: 20 },
]


// | Feature                 | `interface`       | `type`                                  |
// | ----------------------- | ----------------- | --------------------------------------- |
// | **Declaration merging** | ✅ Yes             | ❌ No                                    |
// | **Extends**             | `extends` keyword | `&` (intersection)                      |
// | **Primitives**          | ❌ No              | ✅ Yes (`type ID = string`)              |
// | **Unions**              | ❌ No              | ✅ Yes (`type A = B \| C`)               |
// | **Tuples**              | ❌ No              | ✅ Yes (`type Point = [number, number]`) |
// | **Computed properties** | ❌ No              | ✅ Yes                                   |


interface User {
    name: string;
}
interface User {
    age: number;
}

let user1: User = {
    name: "John",
    age: 30,
} // this is fine because of declaration merging, we can declare the same interface multiple times and it will merge the properties together.


type UserType = {
    name: string;
}

// type UserType = {
//     age: number;
// } // this will give an error because we cannot declare the same type multiple times, it does not support declaration merging.


interface MoreUser extends User {
    email: string;
    password: number;
    passcode: number;
}

let user2: MoreUser = {
    name: "Jane",
    age: 25,
    email: "",
    password: 123456,
    passcode: 1234,
} // this is fine because we are using intersection to combine the User type with the additional properties.

type MoreUserType = UserType & {
    email: string;
    password: number;
    passcode: number;
}

// interface UserName string
type UserName = string
type UserName2 = (string | number)[] // this will give an error because we cannot declare the same type multiple times, it does not support declaration merging.
type UserName3 = "David" | "Gray" // this will give an error because we cannot declare the same type multiple times, it does not support declaration merging.

