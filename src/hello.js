// Greets TypeScript.
console.log('hello TypeScript');
// Explicit Types
// add type annotations on 'language' and 'date', 
// to describe what types of values this function can be called with
function greet(language, date) {
    console.log(`Hello ${language}, it's ${date} now`);
}
greet(1, 'date');
