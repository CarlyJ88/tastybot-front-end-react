import React from 'react';
import './ListIngredients.css';

function ListIngredients({ showIngredient, handleRemove, onClick }) {
  return (
    <div className="container-two">
      <p style={{textAlign: "center", fontSize: "24px", color: "#070D0D", margin: "0"}}>Ingredients</p>
      <ul className="list-ingredients">
        {showIngredient.map((item, index) => {
          console.log(item, 'item')
          return <li className="item" key={index} >{item.quantity}{item.unit} <a href={item.link}>{item.ingredient_name}</a> {item.categories} <button type="button" className="button" onClick={() => handleRemove(index)}>Remove</button></li>
        })}
      </ul>
      <input className="add-ingredient" type="submit" value="Add Ingredient" onClick={onClick} />
    </div>
  )
}

export default ListIngredients;
