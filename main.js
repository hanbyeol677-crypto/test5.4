document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberElements = document.querySelectorAll('.number');

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers);
    }

    function displayNumbers(numbers) {
        numberElements.forEach((element, index) => {
            element.textContent = '';
            element.classList.remove('animate');
            setTimeout(() => {
                element.textContent = numbers[index];
                element.classList.add('animate');
            }, index * 100);
        });
    }
});
