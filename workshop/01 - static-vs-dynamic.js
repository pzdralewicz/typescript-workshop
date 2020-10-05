// all below operations are valid for dynamically typed languages
let id = 10;
id = "dsad1-daf31-hr643";
id = [];

let id2 = 20;
// in the flow of application we can lose track of what id type is

// what will return from calling subtractNumbers(10, "4" , 3)?
const subtractNumbers = (number1, number2) => {
  return number1 - number2;
};

// QUIZ - whats the value?
id = subtractNumbers(id2, 10);

// QUIZ - what will return from calling addThreeNumbers(3, 4, "3")?
const addThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

// QUIZ - whats the value?
id = addThreeNumbers(id, id2, "0");

// QUIZ - what will return from adding [1,2,3] + [4,5,6]?
// what would we want to return and how does it affect implementation?
const addArrays = (arr1, arr2) => {
  return arr1 + arr2;
};

const idArray = addArrays([id], [id2]);

// going further - dynamic type checking allows us to call function with wrong parameter types which results in errors
// sometimes in the flow of an app the type isnt obvious and might be hard to debug

// QUIZ - what are the current parameter values?
addThreeNumbers(id, id2, 10);
addArrays(idArray, [3]);
