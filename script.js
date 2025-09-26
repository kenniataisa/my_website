document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calculatorForm');
  const catetoAInput = document.getElementById('catetoA');
  const catetoBInput = document.getElementById('catetoB');
  const resultDisplay = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que a página recarregue

    const catetoA = parseFloat(catetoAInput.value);
    const catetoB = parseFloat(catetoBInput.value);

    // Validação de entrada
    if (isNaN(catetoA) || isNaN(catetoB) || catetoA <= 0 || catetoB <= 0) {
      resultDisplay.textContent = 'Por favor, insira valores positivos válidos.';
      resultDisplay.classList.add('error');
      return;
    }

    resultDisplay.classList.remove('error');

    // Teorema de Pitágoras
    const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

    resultDisplay.textContent = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
  });
});
