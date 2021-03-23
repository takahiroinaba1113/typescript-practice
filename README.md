# typescript-practice
This repo is a note for learning typescript

## Goal
- able to explain what TypeScript is and why it is used
- know how to use it with its feature of static type definitions
- able to write ts/tsx codes in a React project

## What is TypeScript?
- open-source language built upon JavaScript by adding ***static type definitions*** (All valid JavaScript code is also TypeScript, with just additional type info. They can coexit!)
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
