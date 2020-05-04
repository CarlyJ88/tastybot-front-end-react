import React, { useState, Fragment } from 'react';

function IngredientInput({onAdd}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const changeHandler = ev => {
    ev.preventDefault();
    setName(ev.currentTarget.value);
  }
  const quantityChangeHandler = ev => {
    ev.preventDefault();
    setQuantity(ev.currentTarget.value);
  }

  const unitChangeHandler = ev => {
    ev.preventDefault();
    setUnit(ev.currentTarget.value);
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
         <label>
        Unit:
        <input
        type="text"
        value={unit}
        onChange={unitChangeHandler}
        />
      </label>
      <button type="button" onClick={() => {
        onAdd({ingredient_name: name, quantity, unit})
        setName('')
        setQuantity('')
        setUnit('')
      }}>Add</button>
    </Fragment>
  );
}

export default IngredientInput;