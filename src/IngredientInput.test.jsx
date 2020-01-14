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
  const quantity = getByLabelText('Quantity:')
  const unit = getByLabelText('Unit:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '100' } })
  fireEvent.change(unit, { target: { value: 'g' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({name:'Apple', quantity:'100', unit:'g'});
});

it('can add two ingredients', () => {
  const onAdd = jest.fn();
  const { getByText, getByLabelText } = render(<IngredientInput onAdd={onAdd} />);
  const ingredient = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  const unit = getByLabelText('Unit:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '3' } })
  fireEvent.change(unit, { target: { value: '' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient, { target: { value: 'Banana' } })
  fireEvent.change(quantity, { target: { value: '2' } })
  fireEvent.change(unit, { target: { value: '' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(quantity.value).toBe('');
  expect(unit.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({name:'Apple', quantity:'3', unit:''});
  expect(onAdd).toHaveBeenCalledWith({name:'Banana', quantity:'2', unit:''});
});

it('has a label for unit', () => {
  const { getByLabelText } = render(<App />);
  expect(getByLabelText('Unit:').value).toEqual('');
});
