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
    <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}}/>
    <MethodInput onAdd={(input => {setShowInput([...showInput, input])})}/>
    <ListIngredients showIngredient={showIngredient} />
    <ListMethod showInput={showInput} />
  </Fragment>
  );

}

export default RecipePage;