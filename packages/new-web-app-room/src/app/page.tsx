'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <>
      {/* Fixed background */}
      <div className="animated-grid-bg" />
      
      {/* Matrix text rain */}
      <div className="animated-grid">
        <div className="matrix-column">01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100</div>
        <div className="matrix-column">11010101<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010</div>
        <div className="matrix-column">00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110</div>
        <div className="matrix-column">10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110</div>
        <div className="matrix-column">01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111</div>
        <div className="matrix-column">11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110</div>
        <div className="matrix-column">00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100</div>
        <div className="matrix-column">10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010</div>
        <div className="matrix-column">01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000</div>
        <div className="matrix-column">11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010</div>
        <div className="matrix-column">00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001</div>
        <div className="matrix-column">10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001</div>
        <div className="matrix-column">00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110</div>
        <div className="matrix-column">11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010</div>
        <div className="matrix-column">01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001</div>
        <div className="matrix-column">11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101</div>
        <div className="matrix-column">00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010</div>
        <div className="matrix-column">10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010</div>
        <div className="matrix-column">01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011</div>
        <div className="matrix-column">11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100</div>
        <div className="matrix-column">00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101</div>
        <div className="matrix-column">10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101</div>
        <div className="matrix-column">10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111<br/>01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110</div>
        <div className="matrix-column">01110100<br/>11010010<br/>00101001<br/>10111000<br/>01001110<br/>11010101<br/>00110010<br/>10101100<br/>01001010<br/>11010110<br/>00110101<br/>10101001<br/>01110010<br/>11001100<br/>00101110<br/>10110011<br/>01001101<br/>11100001<br/>00011010<br/>10101111</div>
      </div>
      
      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="calculator-container p-8 w-full max-w-sm relative">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 text-shadow">Calculator</h1>
        
        {/* Display */}
        <div className="calculator-display p-6 mb-6">
          <div className="text-right text-4xl font-mono overflow-hidden min-h-[60px] flex items-center justify-end">
            {display}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <button
            onClick={clear}
            className="col-span-2 calculator-button calculator-button-clear py-5 px-4 text-lg font-bold"
          >
            Clear
          </button>
          <button
            onClick={() => inputOperation('÷')}
            className="calculator-button calculator-button-operator py-5 px-4 text-xl font-bold"
          >
            ÷
          </button>
          <button
            onClick={() => inputOperation('×')}
            className="calculator-button calculator-button-operator py-5 px-4 text-xl font-bold"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber('7')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="calculator-button calculator-button-operator py-5 px-4 text-xl font-bold"
          >
            -
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber('4')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="calculator-button calculator-button-operator py-5 px-4 text-xl font-bold"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber('1')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            3
          </button>
          <button
            onClick={performCalculation}
            className="row-span-2 calculator-button calculator-button-equals py-5 px-4 text-2xl font-bold"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 calculator-button py-5 px-4 text-xl font-bold"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="calculator-button py-5 px-4 text-xl font-bold"
          >
            .
          </button>
        </div>
        </div>
      </div>
    </>
  );
}











