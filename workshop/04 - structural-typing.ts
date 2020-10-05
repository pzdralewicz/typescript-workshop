// The basic rule for TypeScript’s structural type system is that x is compatible with y if y has at least the same members as x.
interface Duck {
  legs: number;
  makesSound: boolean;
}

interface Dog {
  legs: number;
  makesSound: boolean;
  bark: () => void;
}

const quack = (duck: Duck) => {
  console.log(
    `I have ${duck.legs} legs${duck.makesSound ? " and I make sound" : "."}`
  );
};

const dog: Dog = {
  legs: 4,
  makesSound: true,
  bark: () => console.log("Woof!"),
};

const silentDuck: Duck = {
  legs: 2,
  makesSound: false,
};

// works for both above objects as long as Dog interface satifies every field from Duck interface
// it called "structural typing" (or duck-typing)
quack(silentDuck);
quack(dog);
