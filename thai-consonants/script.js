const thaiConsonants = [
  { letter: 'ก', sound: 'k' },
  { letter: 'ข', sound: 'kh' },
  { letter: 'ฃ', sound: 'kh' },
  { letter: 'ค', sound: 'kh' },
  { letter: 'ฅ', sound: 'kh' },
  { letter: 'ฆ', sound: 'kh' },
  { letter: 'ง', sound: 'ng' },
  { letter: 'จ', sound: 'ch' },
  { letter: 'ฉ', sound: 'ch' },
  { letter: 'ช', sound: 'ch' },
  { letter: 'ซ', sound: 's' },
  { letter: 'ฌ', sound: 'ch' },
  { letter: 'ญ', sound: 'y' },
  { letter: 'ฎ', sound: 'd' },
  { letter: 'ฏ', sound: 't' },
  { letter: 'ฐ', sound: 'th' },
  { letter: 'ฑ', sound: 'th' },
  { letter: 'ฒ', sound: 'th' },
  { letter: 'ณ', sound: 'n' },
  { letter: 'ด', sound: 'd' },
  { letter: 'ต', sound: 't' },
  { letter: 'ถ', sound: 'th' },
  { letter: 'ท', sound: 'th' },
  { letter: 'ธ', sound: 'th' },
  { letter: 'น', sound: 'n' },
  { letter: 'บ', sound: 'b' },
  { letter: 'ป', sound: 'p' },
  { letter: 'ผ', sound: 'ph' },
  { letter: 'ฝ', sound: 'f' },
  { letter: 'พ', sound: 'ph' },
  { letter: 'ฟ', sound: 'f' },
  { letter: 'ภ', sound: 'ph' },
  { letter: 'ม', sound: 'm' },
  { letter: 'ย', sound: 'y' },
  { letter: 'ร', sound: 'r' },
  { letter: 'ล', sound: 'l' },
  { letter: 'ว', sound: 'w' },
  { letter: 'ศ', sound: 's' },
  { letter: 'ษ', sound: 's' },
  { letter: 'ส', sound: 's' },
  { letter: 'ห', sound: 'h' },
  { letter: 'ฬ', sound: 'l' },
  { letter: 'อ', sound: 'o' },
  { letter: 'ฮ', sound: 'h' },
];

let questions = [];
let currentIndex = 0;
let score = 0;
let answers = [];

const letterDiv = document.getElementById('thai-letter');
const optionsDiv = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const scoreSpan = document.getElementById('score');
const reviewList = document.getElementById('review-list');

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomOptions(correctSound) {
  let allSounds = [...new Set(thaiConsonants.map(item => item.sound))];
  let wrongOptions = allSounds.filter(s => s !== correctSound);
  let randomWrong = shuffle(wrongOptions).slice(0, 3);
  return shuffle([correctSound, ...randomWrong]);
}

function startGame() {
  document.getElementById('alphabet-table').classList.add('hidden');
  document.getElementById('question-container').classList.remove('hidden');
  resultContainer.classList.add('hidden');
  answers = [];

  currentIndex = 0;
  score = 0;
  questions = shuffle(thaiConsonants).slice(0, 10);
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIndex];
  letterDiv.textContent = current.letter;
  const options = getRandomOptions(current.sound);
  optionsDiv.innerHTML = '';

  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option, current);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected, current) {
  const isCorrect = selected === current.sound;
  if (isCorrect) score += 10;

  answers.push({
    letter: current.letter,
    correct: current.sound,
    selected: selected,
    isCorrect: isCorrect,
  });

  currentIndex++;
  if (currentIndex < questions.length) {
    setTimeout(showQuestion, 400);
  } else {
    setTimeout(showResult, 400);
  }
}

function showResult() {
  document.getElementById('question-container').classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreSpan.textContent = score;
  reviewList.innerHTML = '';

  answers.forEach((ans, i) => {
    const item = document.createElement('li');
    item.className = 'review-item';
    item.innerHTML = `
      <strong>Q${i + 1}: ${ans.letter}</strong><br>
      Your answer: <span class="${ans.isCorrect ? 'correct' : 'wrong'}">${
      ans.selected
    }</span><br>
      Correct answer: <span class="correct">${ans.correct}</span>
    `;
    reviewList.appendChild(item);
  });
}

// Reference table generation
const refTable = document.getElementById('ref-table-body');
thaiConsonants.forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${item.letter}</td><td>${item.sound}</td>`;
  refTable.appendChild(row);
});
