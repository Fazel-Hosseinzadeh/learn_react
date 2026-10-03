import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>User Name:  {props.name}</h2>
      <h3>User Age: {props.age}</h3>
      <h3>User Hobbies:
      {props.hobbies.map(h =>(
        <ul key = {Math.random()}>
          <li>{h}</li>
        </ul>

      ))}
      </h3>
    </div>
  );
}

export default Person;