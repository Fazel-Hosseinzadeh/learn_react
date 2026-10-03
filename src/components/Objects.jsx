import React from "react";

const Objects = () => {
  const ObjectsArray = [
    { id: 0, name: "Alex", age: 20 },
    { id: 1, name: "Bob", age: 30 },
    { id: 2, name: "Ann", age: 40 },
  ];

  return (
    <ul>
      {ObjectsArray.map((o) => (
        <li key={Math.random()}>
          ID: {o.id} - Naeme :{o.name} - Age:{o.age}
        </li>
      ))}
    </ul>
  );
};

export default Objects;
