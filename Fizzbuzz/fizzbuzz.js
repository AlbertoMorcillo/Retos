function displayFizzBuzz() {
    const container = document.getElementById('fizzbuzz-container');
    container.innerHTML = ''; 
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz';
        } else if (i % 3 === 0) {
            output = 'Fizz';
        } else if (i % 5 === 0) {
            output = 'Buzz';
        } else {
            output = i;
        }
        const div = document.createElement('div');
        div.textContent = output;
        container.appendChild(div);
    }
}
