import React from 'react';

export default function Ingredients({ingredients, handleRemove}) {
  return (
    <div>
      <ul className="list-ingredients">
        {ingredients.map((item, index) => {
          return <li className="item" key={index} >{item.quantity}{item.unit} <a href={item.link}>{item.ingredient_name}</a> {item.categories} <button type="button" className="button" onClick={() => handleRemove(index)}>Remove</button></li>
        })}
      </ul>
    </div>
  )
}