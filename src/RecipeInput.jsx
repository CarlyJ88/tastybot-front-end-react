import React, { useState, Fragment } from 'react';

function RecipeInput() {
    const [ingredient, setIngredient] = useState();

    return (
        <Fragment>
        <label>
            Ingredient:
            <input
                type="text"
                value={ingredient}
                onChange={setIngredient}
            />
        </label>
        <button type="button" onClick={()=>alert('Hello world!')}>Add</button>
        </Fragment>
    );
}

export default RecipeInput;