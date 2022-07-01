import React from 'react';
import './ListIngredients.css';
import Category from './Category';
import options from './options';

export function groupIngredients(ingredients) {

  return Array.from(
    ingredients.reduce((accumulator, currentIngredient) => {
      const category = currentIngredient.categories;
      const ingredients = accumulator.get(category) && accumulator.get(category).ingredients || []
      const categoryObj = {
        displayName: options[category],
        ingredients: [...ingredients, currentIngredient]
      }
      accumulator.set(category, categoryObj);

      // if (accumulator.has(currentIngredient.categories)) {
      //   const category = accumulator.get(currentIngredient.categories);
      //   category.ingredients.push(currentIngredient);
      // } else {
      //   const category = {displayName: options[currentIngredient.categories], ingredients: [currentIngredient]}
      //   accumulator.set(currentIngredient.categories, category);
      // }
      return accumulator;
    }, new Map()).values()) // I want to know about the group itself ('fruit') not the values
}

function ListIngredients({ showIngredient, handleRemove, onClick }) {
  const categories = groupIngredients(showIngredient);

  return (
    <div className="container-two">
      <p style={{textAlign: "center", fontSize: "24px", color: "#070D0D", margin: "0"}}>Ingredients</p>

      {categories.map((category) =>
        <Category
          category={category}
          handleRemove={handleRemove}
          key={category.displayName}
        />
      )}


      <input className="add-ingredient" type="submit" value="Add Ingredient" onClick={onClick} />
    </div>
  )
}

export default ListIngredients;
