import React from 'react';

function ListIngredients({ showIngredient, handleRemove }) {

  return (
    <div style={{color: "#070D0D"}}>
      <h4 style={{textAlign: "center", fontSize: "24px"}}>Ingredients</h4>
      <ul>
        {showIngredient.map((item, index) => {
          return <li key={index} style={{listStyleType: "none"}}>{item.quantity}{item.unit} {item.ingredient_name}<button type="button" style={{outline: "none", backgroundColor: "inherit", border: "none", textAlign: "center", fontSize: "8px", color: "#070D0D"}} onClick={() => handleRemove(index)}>Remove</button></li>
        })}
      </ul>
    </div>
  )
}

export default ListIngredients;
