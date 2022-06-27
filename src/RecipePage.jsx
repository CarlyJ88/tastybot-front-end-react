import React, { useState, Fragment } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';
import MethodInput from './MethodInput';
import ListMethod from './ListMethod';

function RecipePage() {
  const [showIngredient, setShowIngredient] = useState([]);
  const [showInput, setShowInput] = useState([]);

  return (
    <Fragment>
      <div style={{}}>
        <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}} />
        <MethodInput onAdd={(input => { setShowInput([...showInput, input]) })} />

        <ListIngredients showIngredient={showIngredient} />
        <ListMethod showInput={showInput} />
      </div>
    </Fragment>
  );

}

export default RecipePage;