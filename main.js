document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberElements = document.querySelectorAll('.number');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        let theme = 'dark';
        if (body.classList.contains('light-mode')) {
            theme = 'light';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });

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
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberElements.forEach((element, index) => {
            element.textContent = '';
            element.classList.remove('animate');
            // Small delay to trigger animation
            setTimeout(() => {
                element.textContent = numbers[index];
                element.classList.add('animate');
            }, index * 100);
        });
    }
});
