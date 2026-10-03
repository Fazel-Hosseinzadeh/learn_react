import React from 'react'

const UserList = () => {
  const users = [
    {id: 1, name: "Alic", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 22},
  ];


  return (
    <>
    <ul>

      {users.map(({id, name, age}) => (
        <li key = {id}>
          <div>{name}</div>
          <div>{age}</div>
        </li>
      ))}
      </ul>
    </>
  );
}

export default UserList