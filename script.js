function generateInputFields() {
    const quantity = document.getElementById('quantity').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = '';

    for (let i = 1; i <= quantity; i++) {
        const labelGrade = document.createElement('label');
        labelGrade.textContent = `Nota da Avaliação ${i} (0-100): `;

        const inputGrade = document.createElement('input');
        inputGrade.type = 'number';
        inputGrade.name = `grade${i}`;
        inputGrade.min = '0';
        inputGrade.max = '100';

        const labelWeight = document.createElement('label');
        labelWeight.textContent = `Peso da Avaliação ${i} (%): `;

        const inputWeight = document.createElement('input');
        inputWeight.type = 'number';
        inputWeight.name = `weight${i}`;
        inputWeight.min = '1';
        inputWeight.max = '100';

        inputsDiv.appendChild(labelGrade);
        inputsDiv.appendChild(inputGrade);
        inputsDiv.appendChild(document.createElement('br'));
        inputsDiv.appendChild(labelWeight);
        inputsDiv.appendChild(inputWeight);
        inputsDiv.appendChild(document.createElement('br'));
    }

    document.getElementById('generate-button').style.display = 'none';
    document.getElementById('calculate-button').style.display = 'inline-block';
    document.getElementById('reset-button').style.display = 'inline-block';
}

function resetForm() {
    document.getElementById('calculator-form').reset();
    document.getElementById('inputs').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    document.getElementById('generate-button').style.display = 'inline-block';

    document.getElementById('calculate-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
}


function calculateGrade() {
    const quantity = document.getElementById('quantity').value;
    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 1; i <= quantity; i++) {
        const grade = parseFloat(document.getElementsByName(`grade${i}`)[0].value);
        const weight = parseFloat(document.getElementsByName(`weight${i}`)[0].value);

        if (isNaN(grade) || isNaN(weight)) {
            alert('Preencha todos os campos.');
            return;
        }

        totalWeight += weight;
        weightedSum += (grade * weight);
    }

    if (totalWeight !== 100) {
        alert('A soma dos pesos deve ser 100%.');
        return;
    }

    const finalGrade = weightedSum / 100;
    document.getElementById('result').textContent = `Nota Final: ${finalGrade.toFixed(2)}`;
}