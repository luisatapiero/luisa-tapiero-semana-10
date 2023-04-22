import Calculator from './calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    document.body.appendChild(calculator);
  });

  afterEach(() => {
    document.body.removeChild(calculator);
  });

  test('should add two numbers correctly', () => {
    const num1Input = calculator.querySelector('#num1');
    const num2Input = calculator.querySelector('#num2');
    const addBtn = calculator.querySelector('#addBtn');
    const resultElement = calculator.querySelector('#result');

    num1Input.value = '2';
    num2Input.value = '3';

    addBtn.click();

    expect(resultElement.textContent).toBe('Result: 5');
  });
});
