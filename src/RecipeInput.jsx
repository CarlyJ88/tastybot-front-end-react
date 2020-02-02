import React, { Fragment, useState } from 'react';
import IngredientInput from './IngredientInput';
import ListIngredients from './ListIngredients';

function RecipeInput() {
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState([]);
    const [showIngredient, setShowIngredient] = useState([]);

    const inputChangeHandler = ev => {
        ev.preventDefault();
        setInput(ev.currentTarget.value);
    }

    return (
        <Fragment>
            <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}} />
            <label>
                Method:
        <input
                    type="text"
                    value={input}
                    onChange={inputChangeHandler}
                />
            </label>
            <button type="button" onClick={() => {
                setShowInput([...showInput, input]);
                setInput('');
            }}>Add method</button>
             <ListIngredients showIngredient={showIngredient} />
            <ol>
            {showInput.map((item, index) => {
            return <li key={index}>{item}</li>
            })}
            </ol>
        </Fragment>
    );
}

export default RecipeInput;
