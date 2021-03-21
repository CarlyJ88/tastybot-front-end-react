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
      <div style={{margin: "auto", width: "1060px", color: "#070D0D"}}> {/*202px*/}
      <label style={{margin: "24px"}}>
        Ingredient:
        <input
          type="text"
          value={name}
          onChange={changeHandler}
          style={{ margin: "24px", backgroundColor: 'inherit', borderColor: "darkOliveGreen", padding: "4px"}}
        />
      </label>
      <label style={{margin: "24px"}}>
        Quantity:
        <input
        type="text"
        value={quantity}
        onChange={quantityChangeHandler}
        style={{ margin: "24px", backgroundColor: 'inherit', borderColor: "darkOliveGreen", padding: "4px"}}
        />
        </label>
         <label style={{margin: "24px"}}>
        Unit:
        <input
        type="text"
        value={unit}
        onChange={unitChangeHandler}
        style={{margin: "24px", backgroundColor: 'inherit', borderColor: "darkOliveGreen", padding: "4px"}}
        />
      </label>
      <button type="button" style={{outline: "none", backgroundColor: "inherit", color: "#070D0D", margin: "24px", fontSize: "16px", borderColor: "darkOliveGreen", padding: "8px", fontWeight: "bold"}} onClick={() => {
        onAdd({ingredient_name: name, quantity, unit})
        setName('')
        setQuantity('')
        setUnit('')
      }}>Submit</button>
      </div>
    </Fragment>
  );
}

export default IngredientInput;