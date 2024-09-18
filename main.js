const somar = (num1, num2) => num1 + num2;

document.getElementById('somar').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const resultado = somar(num1, num2);

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
