import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Parks from '../../Parks.js';

afterEach(cleanup);

describe('Parks component', () => {
    //First Test
    it('renders', () => {
        render(<Parks />);
      });

    // snapshot test 
    
    it('matches snapshot', () => {
       const { asFragment } = render(<Parks />);
       // assert value comparision

       expect(asFragment()).toMatchSnapshot();
    });

})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {

    // arrange test
    const { getByLabelText } = render(<Parks />);
    // const { getByRole } = render(<Parks />);

    // Assert 
    expect(getByLabelText('happy')).toHaveTextContent('🙂');
    // expect(getByRole('img')).toHaveTextContent('🙂')

  })
});

describe('links are visible', () => { 
  it('inserts text into the links2', () => {
       // arrange test
         const { getByTestId } = render(<Parks />);

       // Assert
       expect(getByTestId('link')).toHaveTextContent('This is my Experience');
  })
})