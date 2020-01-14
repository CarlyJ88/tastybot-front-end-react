import React, { useState, Fragment } from 'react';

function RecipeInput() {
    const [ingredient, setIngredient] = useState();

    return (
        <label>
            Ingredient:
            <input
                type="text"
                value={ingredient}
                onChange={setIngredient}
            />

        </label>

    );
}

export default RecipeInput;