import React, { Fragment, useState } from 'react';
import IngredientsPage from './IngredientsPage';

function RecipeInput() {
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState([]);

    const inputChangeHandler = ev => {
        ev.preventDefault();
        setInput(ev.currentTarget.value);
    }

    return (
        <Fragment>
            <IngredientsPage />
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
            <ol>
            {showInput.map((item, index) => {
            return <li key={index}>{item}</li>
            })}
            </ol>
        </Fragment>
    );
}

export default RecipeInput;