// interfaces and types are used to represent complex data structures
// they can work interchangably but have different syntax
// usually is a matter of comfort between using one or another

// Interfaces are basically a way to describe data shapes, for example, an object.
// !! dont use "Object" type or "{}" to define objects - its bad practice and leads to troubles using basic API

// a basic interface representing Task on TODO list
interface Task {
  id: string;
  name: string;
  completed: boolean;
}

// multiple interfaces of the same name can be defined and will be merged

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// this is valid usage of interfaces, although i discourage it because lacks of cleanliness
const person: Person = {
  name: "Test",
  age: 20,
};

// Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.
// we can create aliases for primitive types - TBH i never do this
type StringAlias = string;
const firstName: StringAlias = "Paweł";

// tuple - defines an array of fixed size; map BBox is a good example of tuple
type BoundingBox = [number, number, number, number];
const bbox: BoundingBox = [1, 2, 3, 4];

// literal types - types that are satisfied by a set of constant values
type GeometryType = "Point" | "LineString" | "Polygon";

type Gender = "Female" | "Male";

type FontSize = 8 | 10 | 12 | 14 | 16;
let size: FontSize = 8;
size = 10;
// size = 17; - error, has to be one of specified above

// union type - a type that matches at least ONE OF provided types

// intersection type - a type that matches ALL OF provided types

// we can do those operations on complex types

// types and interfaces can be mixed together - to simplify understanding:
// TYPES - use for simple types, merging, mixing, etc.
// INTERFACES - use for defining complex data structures

// an example definition of GeoJSON feature (BTW. im not sure if it matches the official one :P)
interface Coordinates {
  x: number;
  y: number;
}

interface Point {
  type: "Point";
  coordinates: Coordinates;
}

interface LineString {
  type: "LineString";
  coordinates: Coordinates[];
}

interface Polygon {
  type: "Polygon";
  coordinates: Coordinates[][];
}

type Geometry = Point | LineString | Polygon;
type ID = string | number;
type Properties = { [name: string]: any };

interface Feature {
  type: "Feature";
  geometry: Geometry;
  id?: ID;
  properties?: Properties;
}

// types and interfaces have a different syntax in some cases but
// you can achieve the same goals using both of them - its not said when to use which
// usually its the matter of developers comfort in using one or another
