import React from 'react';
import ReactDOM from 'react-dom';
import RecipeInput from './RecipeInput';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('has a label for ingredient', () => {
    const { getByLabelText } = render(<RecipeInput />);
    expect(getByLabelText('Ingredient:').value).toEqual('');
  });

  it('has a add ingredient button', () => {
    const { getByText } = render(<RecipeInput />);
    expect(getByText('Add').constructor.name).toEqual('HTMLButtonElement');
  });

  it('can add ingredient', () => {
    const { getByText, getByLabelText } = render(<RecipeInput />);
    const ingredient = getByLabelText('Ingredient:')
    fireEvent.change(ingredient, { target: { value: 'Apple' } })
    fireEvent.click(getByText('Add'))
    // expect(ingredient.value).toBe('');
    expect(getByText('Apple')).toBeDefined();
  });

  it('can add two ingredients', () => {
    const { getByText, getByLabelText } = render(<RecipeInput />);
    const ingredient = getByLabelText('Ingredient:')
    fireEvent.change(ingredient, { target: { value: 'Apple' } })
    fireEvent.click(getByText('Add'))
    fireEvent.change(ingredient, { target: { value: 'Banana' } })
    fireEvent.click(getByText('Add'))
    expect(getByText('Apple')).toBeDefined();
    expect(getByText('Banana')).toBeDefined();
  });