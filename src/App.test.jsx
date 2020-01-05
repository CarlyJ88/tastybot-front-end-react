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
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.change(quantity, { target: { value: '1' } })
  fireEvent.click(getByText('Add'))
  fireEvent.change(ingredient, { target: { value: 'Banana' } })
  fireEvent.change(quantity, { target: { value: '2' } })
  fireEvent.click(getByText('Add'))
  expect(quantity.value).toBe('');
  expect(getByText('2 Banana')).toBeDefined();
});
