import React from 'react';

function ListMethod({showInput}) {
  return (
    <div>
      <h4>Method</h4>
      <ol>
        {showInput.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ol>
    </div>
  )
}

export default ListMethod;
