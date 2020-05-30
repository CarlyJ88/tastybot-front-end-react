jest.mock('./serviceHandlerIntegration'); //this happens before the imports and when getCurrentStock is imported 
// it returns as a mocked module already

import React from 'react';
import { render, act, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientsPage from './IngredientsPage';
import { getCurrentStock } from './serviceHandlerIntegration';

const items = [{ingredient_name: 'Chocolate'}];
const res = {data: items};

beforeEach( async () => {
  getCurrentStock.mockResolvedValue(res);
})

it('shows ingredient', async () => {
  await act( async () => {
    const { getByText } = render(<IngredientsPage />);
    await waitForDomChange();
    expect(getByText('Chocolate')).toBeDefined();
  })
})