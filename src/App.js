import React, { useState } from 'react';
import './App.css';


function App() {
  const [ingredient, setIngredient] = useState();

  return (
    <label>
      Ingredient:
        <input
            type="text"
            value={ingredient}
            onChange={setIngredient}
         />
         </label>
  );
}

export default App;
