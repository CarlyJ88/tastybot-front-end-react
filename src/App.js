import React, { useState } from 'react';
import './App.css';


function App() {
  const [ingredient, setIngredient] = useState();

  return (
        <input
            type="text"
            value={ingredient}
            onChange={setIngredient}
         /> 
  );
}

export default App;
