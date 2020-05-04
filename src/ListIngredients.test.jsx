import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListIngredients from './ListIngredients.jsx';

it('can show ingredient', () => {
  const showIngredient = [{ingredient_name:'Apple', quantity:'3'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
});

it('can show two ingredients', () => {
  const showIngredient = [{ingredient_name:'Apple', quantity:'3', unit:''}, {ingredient_name:'Peanut Butter', quantity:'500', unit:'g'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
  expect(getByText('500g Peanut Butter')).toBeDefined();
});
