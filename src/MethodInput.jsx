import React, { Fragment, useState } from 'react';

function MethodInput({ onAdd }) {
    const [input, setInput] = useState('');

    const inputChangeHandler = ev => {
        ev.preventDefault();
        setInput(ev.currentTarget.value);
    }

    return (
        <Fragment>
            <div style={{}}>
                <label style={{margin: "24px"}}>
                    Method:
        <input
                        type="text"
                        value={input}
                        onChange={inputChangeHandler}
                        style={{ margin: "24px", backgroundColor: 'inherit', borderColor: "darkOliveGreen", padding: "4px" }}
                    />
                </label>
                <button type="button"
                    style={{ outline: "none", backgroundColor: "inherit", margin: "24px", fontSize: "16px", borderColor: "darkOliveGreen", padding: "8px", fontWeight: "bold" }}
                    onClick={() => {
                        onAdd(input)
                        setInput('');
                    }}>Add method</button>
            </div>
        </Fragment>
    );
}

export default MethodInput;
