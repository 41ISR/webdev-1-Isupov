const buttons = document.querySelectorAll('.button');
let resultField = document.getElementById('display');
let currentExpression = ''; 

function handleButton(button) {
    const value = button.target.textContent; 

    // Обработка разных типов кнопок
    if (value === '=') {
      resultField.textContent = eval(resultField.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/").replaceAll("+", "+"));
    } 
    else if (value === 'AC') {
      resultField.textContent = '';
    } 
    else if(value === '%'){
      resultField.textContent = eval(resultField.textContent) + '%';
    }
    else if(value === '+/-'){
      resultField.textContent = '-' + eval(resultField.textContent);
    }
    else {
      resultField.textContent += value;
    }
}


buttons.forEach(button => {
  button.addEventListener('click', handleButton);
})