// We can define both input and output types for functions. To do so we can use basicly anything
// that we already covered, so feel free to mix it up to get interesting results

// when TypeScript gets "void" as return type it will prohibit us from returning anything
const sideEffect = (): void => {
  console.log("Im the side effect");

  // return `You can't return me!`;
};

// return type can be inferred here but its always good idea to be as explicit as possible
const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

// we can pass complex types / interfaces to function and destructure them (or not)
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

const toggleUser = ({ isActive, ...user }: User): User => {
  return {
    ...user,
    isActive: !isActive,
  };
};

// returning intersection type - when user not found undefined will be returned
const findUserById = (users: User[], id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

// returning arrays of User objects
const filterOutInactiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

// higher order functions can also be typed (same goes to higher order components in React)
// notice two concepts here - closures and higher order functions
const userLoggerFactory = (user: User): (() => void) => {
  const userLogger = () => {
    console.log(user);
  };

  return userLogger;
};

// above return type can also be defined like below to increase readability
type UserLogger = () => void;

const userLoggerFactory2 = (user: User): UserLogger => {
  const userLogger = () => {
    console.log(user);
  };

  return userLogger;
};
