import React, { useState, Fragment } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';

function App() {
  const [showIngredient, setShowIngredient] = useState([]);

  return (
    <Fragment>
      <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}}/>
      <ListIngredients showIngredient={showIngredient} />
    </Fragment>
  );
}

export default App;
