// initital load = show add ingredient button + list ingredients
// after clicking on add ingredient button show only the ingredient input
// after clicking submit on the ingredient input show add ingredient button and list ingredients again


// why would you want to load the hidden component?
// why are you trying to do this from css?
// why do you need 2 states?

import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';
import Header from './header';
import "./IngredientsPage.css";
import { getCurrentStock, addToCurrentStock, deleteFromCurrentStock } from './serviceHandlerIntegration';

function IngredientsPage() {
    const [showIngredient, setShowIngredient] = useState([]);
    const [showContent, setShowContent] = React.useState("List")
    const onClick = () => { 
      setShowContent("Input");
    }

    const addIngredient = async (ingredient) => {
      const savedIngredient= await addToCurrentStock(ingredient)
      setShowIngredient([...showIngredient, savedIngredient.data])
      setShowContent("List");
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
    <Header/>
      { showContent === "Input" ?  <IngredientInput onAdd={addIngredient} /> : null }
      { showContent === "List" ? <ListIngredients className="list" showIngredient={showIngredient} 
      handleRemove={handleRemove} onClick={onClick} /> : null}
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