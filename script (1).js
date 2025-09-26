// Aguarda o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos do HTML que vamos usar
    const catetoAInput = document.getElementById('catetoA');
    const catetoBInput = document.getElementById('catetoB');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDisplay = document.getElementById('result');

    // Adiciona um "ouvinte" de evento para o clique no botão
    calculateBtn.addEventListener('click', () => {
        // Pega os valores dos campos de input e converte para números
        const catetoA = parseFloat(catetoAInput.value);
        const catetoB = parseFloat(catetoBInput.value);

        // Validação: verifica se os valores inseridos são números válidos e positivos
        if (isNaN(catetoA) || isNaN(catetoB) || catetoA <= 0 || catetoB <= 0) {
            resultDisplay.textContent = 'Por favor, insira valores positivos válidos.';
            resultDisplay.classList.add('error'); // Adiciona a classe de erro para a cor vermelha
            return; // Para a execução da função aqui
        }

        // Remove a classe de erro caso uma nova conta válida seja feita
        resultDisplay.classList.remove('error');

        // Calcula a hipotenusa usando o Teorema de Pitágoras
        // a^2 + b^2 = c^2  =>  c = raiz_quadrada(a^2 + b^2)
        const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

        // Exibe o resultado formatado com duas casas decimais
        resultDisplay.textContent = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
    });
});