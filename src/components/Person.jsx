import React from 'react'
import stylse from "./Person.module.css"

const Person = (props) => {
  return (
    <div className={stylse.card}>
      <h2>User Name:  {props.name}</h2>
      <h3 className={stylse.textRed}>User Age: {props.age}</h3>
      <h3>User Hobbies:
      {props.hobbies.map(h =>(
        <ul key = {Math.random()}>
          <li>{h}</li>
        </ul>

      ))}
      </h3>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Person;