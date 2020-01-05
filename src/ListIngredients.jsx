import React from 'react';

function ListIngredients({showIngredient}) {

  return (
  <div>
  <ul>
  {showIngredient.map((item, index) => {
  return <li key={index}>{item.quantity} {item.name}</li>
  
  })}
  </ul>
</div>
  )
}

export default ListIngredients;
  