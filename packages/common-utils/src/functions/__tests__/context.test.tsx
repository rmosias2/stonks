import React from 'react';
import { render, screen } from '@testing-library/react';
import { createSafeContext } from '../context';

describe('createSafeContext', () => {
  it('should render component using the created context', () => {
    const [useTestContext, TestContext] = createSafeContext<string>('Test');

    const TestComponent = () => {
      const value = useTestContext();
      return <div data-testid='context-value'>{value}</div>;
    };

    const WrapperComponent = () => (
      <TestContext.Provider value='Test Value'>
        <TestComponent />
      </TestContext.Provider>
    );

    render(<WrapperComponent />);

    const contextValueElement = screen.getByTestId('context-value');
    expect(contextValueElement.textContent).toBe('Test Value');
  });
});
