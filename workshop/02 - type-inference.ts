// Type inference refers to the automatic detection of the data type of an expression in a programming language

// initialize variable as a boolean
let mutable = false;

// TypeScript wont allow us to change the type dynamically because it "remembered" mutable to be a boolean
mutable = 123;

// when provided with multiple types Typescript tries to guess best matching common type that satisfies all members contained
const mixedTypeArray = [1, "string"];

// pushing both numbers and strings is fine
mixedTypeArray.push(123);
mixedTypeArray.push("123");

// but TS wont let us push boolean value because inferred type is (number | string) - more on union types later
mixedTypeArray.push(true);

// if we won't specify the types return type then TypyScript will try to "guess" the
// return type based on parameters or operations inside the context
// <hover on function name to see the typing>
const double = (a) => {
  return a * 2;
};

// QUIZ - whats the returned value - why?
const doubled = double("123");
// test type was inferred to number because the "double" return type was inferred as it.
// TS will only let us call methods from the matching type

// calling number proto methods if perfectly fine
doubled.toFixed(2);

// but string proto "trim" is prohibited
doubled.trim();

// message can be anything, function results in side effect
// QUIZ - what does the function truly returns?
const log = (message) => {
  console.log(message);
};

// ^ we might want to add "return message" and typing to message parameter to see how it affects the return type

// for advanced cases see https://www.typescriptlang.org/docs/handbook/type-inference.html
