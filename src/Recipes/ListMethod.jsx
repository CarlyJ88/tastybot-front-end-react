import React from 'react';

function ListMethod({showInput}) {
  return (
    <div>
      <ol>
        {showInput.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ol>
    </div>
  )
}

export default ListMethod;