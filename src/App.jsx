import React, { useState, Fragment } from 'react';
import './App.css';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [showIngredient, setShowIngredient] = useState('');
  const changeHandler = ev => {
    ev.preventDefault();
    setIngredient(ev.currentTarget.value);
  }

  return (
    <Fragment>
    <label>
      Ingredient:
        <input
            type="text"
            value={ingredient}
            onChange={changeHandler}
         />
         </label>
         <button type="button" onClick={()=>{
          setShowIngredient(ingredient);
         setIngredient('')}}>Add</button>
         
         <div>
         {showIngredient}
         </div>
         </Fragment>
  );
}

export default App;


// useState is called.
// This creates state and a state change function. 
// I have called state ingredient and the state change function setIngredient.
// whenever I call setIngredient with a parameter, the value of ingredient (state) will change to whatever was called inside the parameter of setIngredient.

// What I need to do on the onClick() is set ingredient to nothing/empty string 

