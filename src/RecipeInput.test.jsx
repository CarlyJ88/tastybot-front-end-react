import React from 'react';
import ReactDOM from 'react-dom';
import RecipeInput from './RecipeInput';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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

  it('can add quantity of ingredient', () => {
    const { getByText, getByLabelText } = render(<RecipeInput />);
    const ingredient = getByLabelText('Ingredient:')
    const quantity = getByLabelText('Quantity:')
    fireEvent.change(ingredient, { target: { value: 'Apple' } })
    fireEvent.change(quantity, { target: { value: '1' } })
    fireEvent.click(getByText('Add'))
    expect(quantity.value).toBe('');
    expect(getByText('1 Apple')).toBeDefined();
  });

  it('has a label for unit', () => {
    const { getByLabelText } = render(<RecipeInput />);
    expect(getByLabelText('Unit:').value).toEqual('');
  });

  it('can add unit of ingredient', () => {
    const { getByText, getByLabelText } = render(<RecipeInput />);
    const ingredient = getByLabelText('Ingredient:')
    const quantity = getByLabelText('Quantity:')
    const unit = getByLabelText('Unit:')
    fireEvent.change(ingredient, { target: { value: 'Apple' } })
    fireEvent.change(quantity, { target: { value: '100' } })
    fireEvent.change(unit, { target: { value: 'g' } })
    fireEvent.click(getByText('Add'))
    expect(quantity.value).toBe('');
    expect(getByText('100g Apple')).toBeDefined();
  });

  it('has a label for method', () => {
    const { getByLabelText } = render(<RecipeInput />);
    expect(getByLabelText('Method:').value).toEqual('');
  });

  it('has a add a method button', () => {
    const { getByText } = render(<RecipeInput />);
    expect(getByText('Add method').constructor.name).toEqual('HTMLButtonElement');
  });

  it('can add a method', () => {
    const { getByText, getByLabelText } = render(<RecipeInput />);
    const input = getByLabelText('Method:')
    fireEvent.change(input, { target: { value: 'Begin by whisking together the butter and the sugar.' } })
    fireEvent.click(getByText('Add method'))
    expect(input.value).toBe('');
    expect(getByText('Begin by whisking together the butter and the sugar.')).toBeDefined();
  });