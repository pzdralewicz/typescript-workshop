// TODO: create a type definitions for below objects

// handling dynamic keys
interface Example {}

const example: Example = {
  name: "test",
  items: {
    a: {
      id: 1,
      size: 10,
    },
    b: {
      id: 2,
      size: 34,
    },
  },
  users: [
    {
      id: "asdw-12313-12332-asd",
      name: "Test",
      age: 30,
    },
  ],
  schools: [
    {
      name: "Harvard",
      majors: ["Computer Science", "Economy", "Arts"],
      students: [
        {
          id: 232,
          name: "John",
          interests: ["football", "music"],
          friendIds: [1, 2, 5, 16],
        },
      ],
    },
  ],
};

// handling functions
interface ComponentProps {}

const component = {
  onDelete: (item) => {
    console.log("item deleted");
  },
  onEdit: (item) => {
    console.log("item modified");
  },
  onCancel: () => {
    console.log("operation canceled");
  },
  selectedItem: {
    id: 123,
    description: "mock item",
  },
};
