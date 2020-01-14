import React, { useState, Fragment } from 'react';

function RecipeInput() {
    const [ingredient, setIngredient] = useState();
    const [quantity, setQuantity] = useState();
    const [showIngredient, setShowIngredient] = useState([]);
    const changeHandler = ev => {
        ev.preventDefault();
        setIngredient(ev.currentTarget.value)
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
                onChange={changeHandler}
                />
            </label>
            <button type="button" onClick={() => {
                setShowIngredient([...showIngredient, ingredient]);
                setIngredient('');
            }}>Add</button>

            <div>
                <ul>
                    {showIngredient.map((item, index) => {
                    return <li key= {index}>{item}</li>
                    })}
                </ul>
            </div>
        </Fragment>
    );
}

export default RecipeInput;