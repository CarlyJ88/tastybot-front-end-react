import React, { useState, Fragment } from 'react';

function IngredientInput({onAdd}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const changeHandler = ev => {
    ev.preventDefault();
    setName(ev.currentTarget.value);
  }
  const quantityChangeHandler = ev => {
    ev.preventDefault();
    setQuantity(ev.currentTarget.value);
  }

  return (
    <Fragment>
      <label>
        Ingredient:
        <input
          type="text"
          value={name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Quantity:
        <input
        type="text"
        value={quantity}
        onChange={quantityChangeHandler}
        />
      </label>
      <button type="button" onClick={() => {
        onAdd({name, quantity})
        setName('')
        setQuantity('')
      }}>Add</button>
    </Fragment>
  );
}

export default IngredientInput;