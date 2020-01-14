import React, { useState, Fragment } from 'react';

function RecipeInput() {
    const [ingredient, setIngredient] = useState();
    const [quantity, setQuantity] = useState();
    const [unit, setUnit] = useState();
    const [showIngredient, setShowIngredient] = useState([]);
    const changeHandler = ev => {
        ev.preventDefault();
        setIngredient(ev.currentTarget.value)
    }
    const quantityChangeHandler = ev => {
        ev.preventDefault();
        setQuantity(ev.currentTarget.value)
    }
    const unitChangeHandler = ev => {
        ev.preventDefault();
        setUnit(ev.currentTarget.value)
    }

    return (
        <Fragment>
            <label>
                Ingredient:
            <input
                    type="text"
                    value={ingredient}
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
                setShowIngredient([...showIngredient, {ingredient, quantity, unit}]);
                setIngredient('');
                setQuantity('');
            }}>Add</button>

            <div>
                <ul>
                    {showIngredient.map((item, index) => {
                    return <li key= {index}>{item.quantity}{item.unit} {item.ingredient}</li>
                    })}
                </ul>
            </div>
        </Fragment>
    );
}

export default RecipeInput;