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

it('can add more than one ingredient', () => {
  const { getByText, getByLabelText } = render(<App />);
  const ingredient = getByLabelText('Ingredient:')
  const quantity = getByLabelText('Quantity:')
  const unit = getByLabelText('Unit:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '1' } })
  fireEvent.change(unit, { target: { value: '' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient, { target: { value: 'Peanut Butter' } })
  fireEvent.change(quantity, { target: { value: '500' } })
  fireEvent.change(unit, { target: { value: 'g' } })
  fireEvent.click(getByText('Add'))
  expect(quantity.value).toBe('');
  expect(getByText('1 Apple')).toBeDefined();
  expect(getByText('500g Peanut Butter')).toBeDefined();
});
