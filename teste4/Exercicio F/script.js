function generateSequenceF(n) {
    let sequence = [];
    let start = 2;
    while (sequence.length < n) {
        if (start % 2 === 0 || isPrime(start)) {
            sequence.push(start);
        }
        start++;
    }
    return sequence;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const sequenceF = generateSequenceF(8); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceF').innerText = sequenceF.join(', ');