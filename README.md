# typescript-practice

This repo is a note for learning typescript

## Goal

- able to explain what TypeScript is and why it is used
- know how to use it with its feature of static type definitions
- able to write ts/tsx codes in a React project

## What is TypeScript?

- open-source language built upon JavaScript by adding **_static type definitions_** (All valid JavaScript code is also TypeScript, with just additional type info. They can coexit!)
- TypeScript code is transformed into JavaScript code via the TypeScript compiler or Babel

## What Problems Can TypeScript Solve?

- provide instant feedback (gives you an error) on your code during development (not like JS only seen during runtime!)
- detect errors quickly and avoid unintentional bugs during runtime
- not only catching bugs, but also suggesting properties you might want to use

Example:

In JavaScript

```JavaScript
  const user = {
    id: 11111,
    name: 'user1',
    age: 20,
  }
  user.height; // returns undefined in runtime
```

In TypeScript

```TypeScript
  const user = {
    id: 11111,
    name: 'user1',
    age: 20,
  }
  user.height;
  // TS tells you instantly that 'Property 'height' does not exist on type '{ id: number; name: string; age: number}'.
```

## So how you type?

### Type Annotations

- optionally add a type annotation to a variabled being declared with const, var, or let to specify the type of the variable

Primitives
```TypeScript
// primitives: add ':' and 'type'
let firstName: string = "Taka"
var isTyped: boolean = true
const evenNumber: number = 2
// you can, of course, specify no type (TS automatically infers the type)
let lastName = "Inaba"
var isNotTyped = true
const oddNumber = 3
```

Arrays
```TypeScript
const numArray: number[] = [1, 2, 3, 4, 5]

// Any: you can use whenever you dont want a particular value to cause typechecking errors
let typeAny: any = { val: 0 }
// they are all allowed
typeAny.wow()
typeAny()
typeAny.isAny = true
typeAny = 'type is any'
```

Functions
```TypeScript
// parameter type annotation:
// add type annotations after each parameter to declare what types of rapameters the function accepts
function greet(name: string) {
  console.log(`Hi ${name}`);
}

// typechecking runs and this returns an error
greet(10);
// Argument of type 'number' is not assignable to parameter of type 'string


// return type annotation:
function getNumberTen(): number {
  return 10
}
// usually this is not needed because TS infers the function's return type based on the return statement.
```


Object Types
```TypeScript
// 'parameterName: type', with a separator of either , or ;
function printValues(values: { x: number, y: number }) {
  console.log(`x is ${values.x}`)
  console.log(`y is ${values.y}`)
}
printValues({ x: 1, y: 2})


// optional properties by adding a ?
function printAnyValues(values: { x: number, y: number, z?: number}) {
  // some execution
}
printAnyValues(x: 1, y: 2)
printAnyValues(x: 1, y: 2, z: 3)


// what if an optional property is used but not passed?
function printOptionalValues(values: { a: number, b?: number}) {
  // This gives you an error of "Object is possibly 'undefined'"
  console.log(`printing out ${values.b}!`)

  // But if you check for undefined first, there will be no problem!
  if(values.b !== undefined) {
    console.log(`printing out ${values.b}!`)
  }

  // you could do this way too
  console.log(`printing out ${values.b}!`)
}
```


Type Aliases
```TypeScript
// a type aliase - a name for any type
// not only for an object type, but to any type at all
type Values = {
  x: number
  y: number
}

function printValues(values: Values) {
  console.log(`printint out ${values.x}`)
  console.log(`printint out ${values.y}`)
}

printValues({ x: 1, y: 2 })
```


Interfaces
```TypeScript
// an interface declaration is another way to name an object type
interface Values {
  x: number
  y: number
}

function printValues(values: Values) {
  console.log(`printint out ${values.x}`)
  console.log(`printint out ${values.y}`)
}

printValues({ x: 1, y: 2 })
```

So how type aliases and interfaces are different??
- key diff: extendable or not
  - type cannot be re-opened to add new properties
  - interface is always extendable
- there are some differences...work on them later


https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
