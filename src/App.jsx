import React, { useState, Fragment } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';

function App() {
  const [showIngredient, setShowIngredient] = useState([]);

  return (
    <Fragment>
      <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}}/>

      <div>
        <ul>
        {showIngredient.map((item, index) => {
        return <li key={index}>{item.quantity} {item.name}</li>

      })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;

//   setShowIngredient([...showIngredient,{name, quantity}]);