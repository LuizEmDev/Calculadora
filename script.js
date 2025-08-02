document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculate);
});

let currentOperation = 0;

function showOperation(operation) {
    currentOperation = operation;
    
    // Hide all input fields first
    document.getElementById('num1-field').style.display = 'none';
    document.getElementById('num2-field').style.display = 'none';
    document.getElementById('single-num-field').style.display = 'none';
    document.getElementById('calculate-btn').style.display = 'none';
    document.getElementById('result-display').style.display = 'none';
    
    // Clear previous inputs
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('single-num').value = '';
    
    // Show appropriate input fields based on operation
    switch(operation) {
        case 1: // Soma
        case 2: // Potência
        case 3: // Multiplicação
        case 4: // Divisão
        case 5: // Subtração
        case 7: // Divisão inteira
            document.getElementById('num1-field').style.display = 'block';
            document.getElementById('num2-field').style.display = 'block';
            document.getElementById('calculate-btn').style.display = 'block';
            break;
        case 6: // Módulo
        case 8: // Raiz quadrada
            document.getElementById('single-num-field').style.display = 'block';
            document.getElementById('calculate-btn').style.display = 'block';
            break;
        default:
            showResult("Operação inválida!");
    }
}

function calculate() {
    let result;
    
    try {
        switch(currentOperation) {
            case 1: // Soma
                const n1 = parseFloat(document.getElementById('num1').value);
                const n2 = parseFloat(document.getElementById('num2').value);
                result = `Resultado: ${n1} + ${n2} = ${n1 + n2}`;
                break;
            case 2: // Potência
                const base = parseFloat(document.getElementById('num1').value);
                const exponent = parseFloat(document.getElementById('num2').value);
                result = `Resultado: ${base}^${exponent} = ${Math.pow(base, exponent)}`;
                break;
            case 3: // Multiplicação
                const m1 = parseFloat(document.getElementById('num1').value);
                const m2 = parseFloat(document.getElementById('num2').value);
                result = `Resultado: ${m1} × ${m2} = ${m1 * m2}`;
                break;
            case 4: // Divisão
                const d1 = parseFloat(document.getElementById('num1').value);
                const d2 = parseFloat(document.getElementById('num2').value);
                if (d2 === 0) {
                    result = "Erro: Divisão por zero!";
                } else {
                    result = `Resultado: ${d1} ÷ ${d2} = ${(d1 / d2).toFixed(4)}`;
                }
                break;
            case 5: // Subtração
                const s1 = parseFloat(document.getElementById('num1').value);
                const s2 = parseFloat(document.getElementById('num2').value);
                result = `Resultado: ${s1} - ${s2} = ${s1 - s2}`;
                break;
            case 6: // Módulo
                const mod = parseFloat(document.getElementById('single-num').value);
                result = `Módulo de ${mod} = ${Math.abs(mod)}`;
                break;
            case 7: // Divisão inteira
                const div1 = parseFloat(document.getElementById('num1').value);
                const div2 = parseFloat(document.getElementById('num2').value);
                if (div2 === 0) {
                    result = "Erro: Divisão por zero!";
                } else {
                    result = `Divisão inteira: ${div1} \\ ${div2} = ${Math.floor(div1 / div2)}`;
                }
                break;
            case 8: // Raiz quadrada
                const root = parseFloat(document.getElementById('single-num').value);
                if (root < 0) {
                    result = "Erro: Raiz quadrada de número negativo!";
                } else {
                    result = `√${root} = ${Math.sqrt(root).toFixed(4)}`;
                }
                break;
            default:
                result = "Operação inválida!";
        }
    } catch (e) {
        result = "Erro no cálculo: " + e.message;
    }
    
    showResult(result);
}

function showResult(message) {
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.textContent = message;
    resultDisplay.style.display = 'flex';
}