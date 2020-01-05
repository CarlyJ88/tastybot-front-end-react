import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListIngredients from './ListIngredients.jsx';

it('can show ingredient', () => {
  const showIngredient = [{name:'Apple', quantity:'3'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
});

it('can show two ingredients', () => {
  const showIngredient = [{name:'Apple', quantity:'3'}, {name:'Banana', quantity:'2'}];
  const { getByText } = render(<ListIngredients showIngredient={showIngredient} />);
  expect(getByText('3 Apple')).toBeDefined();
  expect(getByText('2 Banana')).toBeDefined();
});
