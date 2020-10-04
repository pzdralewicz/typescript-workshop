// when TypeScript gets "void" as return type it will prohibit us from returning anything
const sideEffect = (): void => {
  console.log("Im the side effect");

  // return `You can't return me!`;
};

const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};
