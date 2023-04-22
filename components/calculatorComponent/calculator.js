class Calculator extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <input id="num1" tmype="number" />
        <input id="num2" type="number" />
        <button id="addBtn">Add</button>
        <p id="result"></p>
      `;
  
      this.resultElement = this.querySelector('#result');
      this.addBtn = this.querySelector('#addBtn');
  
      this.addBtn.addEventListener('click', () => {
        const num1 = parseFloat(this.querySelector('#num1').value);
        const num2 = parseFloat(this.querySelector('#num2').value);
        const sum = num1 + num2;
        const res = num1 - num2;
        const mult = num1 * num2;
        const divi = num1 / num2;

        this.resultElement.textContent = `El resultado de la suma es ${sum}
        El resultado de la resta es ${res}
        El resultado de la multiplicación es ${mult}
        El resultado de la división es ${divi}
        
        `;
      });
    }
  }
  
  customElements.define('my-calculator', Calculator);
  