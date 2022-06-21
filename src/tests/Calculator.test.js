import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator_add');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');

  });

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  });


  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  });


  it('should concatenate multiple number button clicks', () => {
    


  });

  it('should chain multiple operations together', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonAdd = container.getByTestId('operator_add');
    const button9 = container.getByTestId('number9');
    const button6 = container.getByTestId('number6');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button5);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonAdd);
    fireEvent.click(button6);
    fireEvent.click(buttonAdd);
    fireEvent.click(button9);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('30');

  });

  it('should clear the running total without affecting the calculation', () => {
    const button4 = container.getByTestId('number4');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button6 = container.getByTestId('number6');
    const buttonAdd = container.getByTestId('operator_add');
    const button7 = container.getByTestId('number7');
    const button8 = container.getByTestId('number8');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button6);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button8);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(equals);//39
    fireEvent.click(clear);//0
    
    expect(runningTotal.textContent).toEqual('0');

  });

});
