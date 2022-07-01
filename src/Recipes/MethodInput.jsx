import React, { Fragment, useState } from 'react';
// import IngredientInput from './IngredientInput';
// import ListIngredients from './ListIngredients';
// import ListMethod from './ListMethod';

function MethodInput({onAdd}) {
    const [input, setInput] = useState('');
    // const [showInput, setShowInput] = useState([]);
    // const [showIngredient, setShowIngredient] = useState([]);

    const inputChangeHandler = ev => {
        ev.preventDefault();
        setInput(ev.currentTarget.value);
    }

    return (
        <Fragment>
            {/* <IngredientInput onAdd={(ingredient) => {setShowIngredient([...showIngredient, ingredient])}} /> */}
            <label>
                Method:
        <input
                    type="text"
                    value={input}
                    onChange={inputChangeHandler}
                />
            </label>
            <button type="button" onClick={() => {
                onAdd(input)
                // setShowInput([...showInput, input]);
                setInput('');
            }}>Add method</button>
             {/* <ListIngredients showIngredient={showIngredient} /> */}
             {/* <ListMethod showInput={showInput}/> */}
        </Fragment>
    );
}

export default MethodInput;
