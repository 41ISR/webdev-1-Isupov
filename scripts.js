const buttons = document.querySelectorAll('.button');
let resultField = document.getElementById('display');
let currentExpression = '';

resultField.textContent = '0';

function handleButton(button) {
  const value = button.target.textContent;
  if (resultField.textContent === 'Ошибка' && value !== 'AC') {
    currentExpression = '';
    resultField.textContent = '0';
  }
  if (value === '=') {
    if (!currentExpression) return;
    try {
      let expression = currentExpression
        .replaceAll("×", "*")
        .replaceAll("−", "-")
        .replaceAll("÷", "/");

      let result = eval(expression);
      result = Math.round(result * 1000000) / 1000000;
      currentExpression = result.toString();
      resultField.textContent = currentExpression;
    } catch (error) {
      currentExpression = '';
      resultField.textContent = 'Ошибка';
    }
  }
  else if (value === 'AC') {
    currentExpression = '';
    resultField.textContent = '0';
  }
  else if (value === '%') {
    if (!currentExpression) return;
    try {
      let result = eval(currentExpression) / 100;
      currentExpression = result.toString();
      resultField.textContent = currentExpression;
    } catch (error) {
      currentExpression = '';
      resultField.textContent = 'Ошибка';
    }
  }
  else if (value === '+/-') {
    if (!currentExpression) return;
    try {
      let result = eval(currentExpression) * -1;
      currentExpression = result.toString();
      resultField.textContent = currentExpression;
    } catch (error) {
      currentExpression = '';
      resultField.textContent = 'Ошибка';
    }
  }
  else {
    if (resultField.textContent === '0' || resultField.textContent === 'Ошибка') {
      currentExpression = value;
    } else {
      const lastChar = currentExpression.slice(-1);
      const operators = ['+', '−', '×', '÷'];

      if (operators.includes(value) && operators.includes(lastChar)) {
        currentExpression = currentExpression.slice(0, -1) + value;
      } else {
        currentExpression += value;
      }
    }

    resultField.textContent = currentExpression;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', handleButton);
});