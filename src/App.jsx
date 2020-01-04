import React, { useState, Fragment } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showIngredient, setShowIngredient] = useState([]);
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
        setShowIngredient([...showIngredient,{name, quantity}]);
        setName('')
        setQuantity('')
      }}>Add</button>
      <div>
        <ul>
        {showIngredient.map((item, index) => {
        return <li key={index}>{item.quantity} {item.name}</li>

      })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
