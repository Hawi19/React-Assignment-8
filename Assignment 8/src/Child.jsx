import React, { useContext } from 'react';
import { MyContext } from './App';

const Child = () => {
  const { name, age } = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Child;
