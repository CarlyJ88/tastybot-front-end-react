import React from 'react';
import ReactDOM from 'react-dom';
import RecipeInput from './RecipeInput';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('has a label for ingredient', () => {
    const { getByLabelText } = render(<RecipeInput />);
    expect(getByLabelText('Ingredient:').value).toEqual('');
  });

  it('has a add ingredient button', () => {
    const { getByText } = render(<RecipeInput />);
    expect(getByText('Add').constructor.name).toEqual('HTMLButtonElement');
  });