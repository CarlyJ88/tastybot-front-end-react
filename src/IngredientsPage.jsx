import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';
import { serviceHandlerIntegration } from './serviceHandlerIntegration';

function IngredientsPage() {
    const [showIngredient, setShowIngredient] = useState([]);

    useEffect(()=>{
      async function becauseIhaveTo() {
      const ingredients = await serviceHandlerIntegration();
      console.log(ingredients.data, "the ingredients!!!!!")
      setShowIngredient(ingredients.data);
    }
    becauseIhaveTo();
  }, []);

return (
  <Fragment>
    <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}}/>
    <ListIngredients showIngredient={showIngredient} />
  </Fragment>
  );
}

export default IngredientsPage;

// service handler
// Benefit is that it would follow Single Responsibility which will make it easy to test. 
// If the API changes then there is only one place we need to change things.
// I won't have two places where I'm using the same thing.
// I can mock the service handler easily.
// Will make testing more straightforward.
// Disadvantage is that I will end up having multiple files.
// I will have a component and service handler and they need to communicate.
// I could end up mocking the service handler incorrectly

// Is my project complex enough to require a service handler?
// because it is a practice project and to use the best practices
// because I can mock the service handler so I won't need the service up and running to get data