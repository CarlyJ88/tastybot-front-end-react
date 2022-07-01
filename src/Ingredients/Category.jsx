import React from 'react';
import Ingredients from './Ingredients';

export default function Category({category, handleRemove}) {
  console.log(category, 'category');
  return (
    <>
    <h1>{category.displayName}</h1>
    <Ingredients ingredients={category.ingredients} handleRemove={handleRemove} />
    </>
  )
}