import React, { Fragment, useState } from 'react';
import IngredientsPage from './IngredientsPage';

function RecipeInput() {
    const [input, setInput] = useState('');

    return (
        <Fragment>
            <IngredientsPage />
            <label>
                Method:
        <input
                    type="text"
                    value={input}
                    onChange={setInput}
                />
            </label>
        </Fragment>
    );
}

export default RecipeInput;