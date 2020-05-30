import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientInput from './IngredientInput.jsx';

it('can add ingredient', () => {
  const onAdd = jest.fn();
  const { getByText, getByLabelText } = render(<IngredientInput onAdd={onAdd} />);
  const ingredient_name = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  const unit = getByLabelText('Unit:')
  fireEvent.change(ingredient_name, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '100' } })
  fireEvent.change(unit, { target: { value: 'g' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient_name.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({ingredient_name:'Apple', quantity:'100', unit:'g'});
});

it('can add two ingredients', () => {
  const onAdd = jest.fn();
  const { getByText, getByLabelText } = render(<IngredientInput onAdd={onAdd} />);
  const ingredient_name = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  const unit = getByLabelText('Unit:')
  fireEvent.change(ingredient_name, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '3' } })
  fireEvent.change(unit, { target: { value: '' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient_name, { target: { value: 'Banana' } })
  fireEvent.change(quantity, { target: { value: '2' } })
  fireEvent.change(unit, { target: { value: '' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient_name.value).toBe('');
  expect(quantity.value).toBe('');
  expect(unit.value).toBe('');
  expect(onAdd).toHaveBeenCalledWith({ingredient_name:'Apple', quantity:'3', unit:''});
  expect(onAdd).toHaveBeenCalledWith({ingredient_name:'Banana', quantity:'2', unit:''});
});
