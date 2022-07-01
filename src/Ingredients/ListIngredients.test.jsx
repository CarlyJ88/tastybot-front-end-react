import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListIngredients from './ListIngredients';
import {groupIngredients} from './ListIngredients'

xit('can show ingredient', () => {
  const showIngredient = [{ingredient_name:'Apple', quantity:'3'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
});

xit('can show two ingredients', () => {
  const showIngredient = [{ingredient_name:'Apple', quantity:'3', unit:''}, {ingredient_name:'Peanut Butter', quantity:'500', unit:'g'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
  expect(getByText('500g Peanut Butter')).toBeDefined();
});

describe('list categories of ingredients', () => {
  const fruit = {
    "id": 1, 
    "ingredient_name": "Tesco Italian Chopped Tomatoes", 
    "quantity": 2, 
    "unit": "",
    "link": "https://www.tesco.com/groceries/en-GB/products/251825089",
    "categories": "fruit"
  }

  const vegetable = {
    "id": 2, 
    "ingredient_name": "Carrot", 
    "quantity": 5, 
    "unit": "",
    "link": "https://www.tesco.com/groceries/en-GB/products/251825089",
    "categories": "vegetables"
  }

  const fruit2 = {
    "id": 3, 
    "ingredient_name": "Courgette", 
    "quantity": 2, 
    "unit": "",
    "link": "https://www.tesco.com/groceries/en-GB/products/251825089",
    "categories": "fruit"
  }

  it('no ingredients', () => {
    expect(groupIngredients([])).toEqual([]);
  })

  it('has an ingredient', () => {
    expect(groupIngredients([fruit])).toEqual([{ 
      displayName: "Fruit",
      ingredients: [fruit]}]);
  })

  it('has 3 ingredients that belong to 2 categories', () => {
    expect(groupIngredients([fruit, vegetable, fruit2])).toEqual([
      { displayName: "Fruit", ingredients: [fruit, fruit2] },
      { displayName: "Vegetables", ingredients: [vegetable] }
    ]);
  })
})
