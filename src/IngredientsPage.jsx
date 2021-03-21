import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';
import CuisineSearch from './CuisineSearch';
import VitalIngredientsSearch from './VitalIngredientsSearch';
import { getCurrentStock, addToCurrentStock, deleteFromCurrentStock } from './serviceHandlerIntegration';

function IngredientsPage() {
    const [showIngredient, setShowIngredient] = useState([]);

    const addIngredient = async (ingredient) => {
      const savedIngredient= await addToCurrentStock(ingredient)
      setShowIngredient([...showIngredient, savedIngredient.data])
    }

    const handleRemove  = (index) => {
      const newList = showIngredient.filter((item, currentIndex) => currentIndex !== index);
      deleteFromCurrentStock(showIngredient[index]);
      setShowIngredient(newList);
    }

    useEffect(()=>{
      async function becauseIhaveTo() {
      const ingredients = await getCurrentStock();
      setShowIngredient(ingredients.data);
    }
    becauseIhaveTo();
  }, []);

return (
  <Fragment>
    <h1 style={{textAlign: "center", backgroundColor: "darkOliveGreen", color: "cornsilk", marginTop: "0px"}}>Welcome to TastyBot</h1>
    <h2 style={{margin: "24px", color: "#070D0D"}}>What's in my cupboard?</h2>
    <CuisineSearch />
    <VitalIngredientsSearch />
    <IngredientInput onAdd={addIngredient} />
    <ListIngredients showIngredient={showIngredient} handleRemove={handleRemove} />
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