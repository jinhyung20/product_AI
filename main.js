const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('theme-toggle');

// 다크모드 상태 복원
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

generateBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
    const circle = document.createElement('div');
    circle.classList.add('number-circle');
    circle.textContent = number;
    numbersContainer.appendChild(circle);
  });
});
