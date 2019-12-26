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

it('has a label for ingredient', () => {
  const { getByLabelText } = render(<App />);
  expect(getByLabelText('Ingredient:').value).toEqual('');
});

it('has a add ingredient button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Add').constructor.name).toEqual('HTMLButtonElement');
});

it('can add ingredient', () => {
  const { getByText, getByLabelText } = render(<App />);
  const ingredient = getByLabelText('Ingredient:')
  fireEvent.change(ingredient, { target: { value: 'Apple' } })
  fireEvent.click(getByText('Add'))
  expect(ingredient.value).toBe('');
  expect(getByText('Apple')).toBeDefined();
});