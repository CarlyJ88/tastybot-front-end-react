import React, { useState, Fragment, Component } from 'react';
import './IngredientInput.css';
import Select from 'react-select'

const options = [
  { value: 'grains', label: 'Grains' },
  { value: 'vegetables', label: 'Vegetables' },
  { value: 'fruit', label: 'Fruit' },
  { value: 'pulses', label: 'Pulses' },
  { value: 'junk-food', label: 'Junk food' },
  { value: 'treats', label: 'Treats' },
  { value: 'beverages', label: 'Beverages' },
  { value: 'proteins', label: 'Proteins' },
  { value: 'oils', label: 'Oils' },
  { value: 'dairy-alternatives', label: 'Dairy Alternatives' },
]

function IngredientInput({onAdd}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');

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

  const linkChangeHandler = ev => {
    ev.preventDefault();
    setLink(ev.currentTarget.value);
  }

  const categoryChangeHandler = selectedOption => {
    console.log(selectedOption.value, 'selectedOption')
    // ev.preventDefault();
    setCategory(selectedOption.value);
  }

  return (
    <Fragment>
      <div className="container">
      <div className="input-container">
      <label className="input-label">
        <span className="input-text">Ingredient</span>
        <input
          type="text"
          value={name}
          onChange={changeHandler}
          className="input-field"
        />
      </label>
      <label className="input-label">
      <span className="input-text">Quantity</span>
        <input
        type="text"
        value={quantity}
        onChange={quantityChangeHandler}
        className="input-field"
        />
        </label>
        <label className="input-label">
        <span className="input-text">Unit</span>
        <input
        type="text"
        value={unit}
        onChange={unitChangeHandler}
        className="input-field"
        />
      </label>
      <label className="input-label">
      <span className="input-text">Link</span>
        <input
        type="text"
        value={link}
        onChange={linkChangeHandler}
        className="input-field"
        />
        </label>
        <Select options={options} onChange={categoryChangeHandler} />
      <button type="button" className="input-button" onClick={() => {
        console.log(category, 'category')
        onAdd({ingredient_name: name, quantity, unit, link, categories: category})
        setName('')
        setQuantity('')
        setUnit('')
        setLink('')
      }}>Submit</button>
      </div>
      </div>
    </Fragment>
  );
}

export default IngredientInput;