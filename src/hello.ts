// Greets TypeScript.
console.log('hello TypeScript');

// Explicit Types
// add type annotations on 'language' and 'date', 
// to describe what types of values this function can be called with
function greet(language: string, date: Date) { 
  console.log(`Hello ${language}, it's ${date} now`);
}

// greet(1, 'date'); // if you execute this, you'd get an error like below:

// hello.ts:11:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// 11 greet(1, 'date');
//          ~
// Found 1 error.
