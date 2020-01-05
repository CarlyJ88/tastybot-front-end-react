import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientInput from './IngredientInput.jsx';

it('can add ingredient', () => {
  const onAdd = jest.fn();
  const { getByText, getByLabelText } = render(<IngredientInput onAdd={onAdd} />);
  const ingredient = getByLabelText('Ingredient:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({name:'Apple', quantity:''});
});

it('can add two ingredients', () => {
  const onAdd = jest.fn();
  const { getByText, getByLabelText } = render(<IngredientInput onAdd={onAdd} />);
  const ingredient = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '3' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient, { target: { value: 'Banana' } })
  fireEvent.change(quantity, { target: { value: '2' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(quantity.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({name:'Apple', quantity:'3'});
  expect(onAdd).toHaveBeenCalledWith({name:'Banana', quantity:'2'});
});
