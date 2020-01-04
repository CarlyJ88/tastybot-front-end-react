import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can add ingredient', () => {
  const { getByText, getByLabelText } = render(<App />);
  const ingredient = getByLabelText('Ingredient:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(getByText('Apple')).toBeDefined();
});

it('can add two ingredients', () => {
  const { getByText, getByLabelText } = render(<App />);
  const ingredient = getByLabelText('Ingredient:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient, { target: { value: 'Banana' } })
  fireEvent.click(getByText('Add'))
  expect(getByText('Apple')).toBeDefined();
  expect(getByText('Banana')).toBeDefined();
});

it('has a label for quantity', () => {
  const { getByLabelText } = render(<App />);
  expect(getByLabelText('Quantity:').value).toEqual('');
});

it('can add quantity of ingredient', () => {
  const { getByText, getByLabelText } = render(<App />);
  const ingredient = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '1' } })
  fireEvent.click(getByText('Add'))
  expect(quantity.value).toBe('');
  expect(getByText('1 Apple')).toBeDefined();
});
