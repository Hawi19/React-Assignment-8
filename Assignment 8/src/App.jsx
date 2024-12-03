import React, { createContext } from 'react';
import Child from './Child';
export const MyContext = createContext();

function App ()  {
  const user = {
    name: "Alice",
    age: 20
  };

  return (
    <MyContext.Provider value={user}>
      <div>
        <h1>Parent Component (App)</h1>
        <Child />
      </div>
    </MyContext.Provider>
  );
};

export default App;