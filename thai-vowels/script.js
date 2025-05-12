const thaiVowels = [
  { vowel: 'อะ', sound: 'a' }, { vowel: 'อา', sound: 'aa' },
  { vowel: 'อิ', sound: 'i' }, { vowel: 'อี', sound: 'ii' },
  { vowel: 'อึ', sound: 'ue' }, { vowel: 'อื', sound: 'uee' },
  { vowel: 'อุ', sound: 'u' }, { vowel: 'อู', sound: 'uu' },
  { vowel: 'เอ', sound: 'e' }, { vowel: 'แอ', sound: 'ae' },
  { vowel: 'โอ', sound: 'o' }, { vowel: 'ออ', sound: 'oo' },
  { vowel: 'เอะ', sound: 'e' }, { vowel: 'แอะ', sound: 'ae' },
  { vowel: 'โอะ', sound: 'o' }, { vowel: 'เอาะ', sound: 'aw' },
  { vowel: 'อัว', sound: 'ua' }, { vowel: 'เอีย', sound: 'ia' },
  { vowel: 'เอือ', sound: 'uea' }, { vowel: 'ไอ', sound: 'ai' },
  { vowel: 'ใอ', sound: 'ai' }, { vowel: 'อัย', sound: 'ai' },
  { vowel: 'อาว', sound: 'ao' }, { vowel: 'เอา', sound: 'ao' },
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
  let allSounds = [...new Set(thaiVowels.map(item => item.sound))];
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
  questions = shuffle(thaiVowels).slice(0, 10);
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIndex];
  letterDiv.textContent = current.vowel;
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
    letter: current.vowel,
    correct: current.sound,
    selected: selected,
    isCorrect: isCorrect
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
      Your answer: <span class="${ans.isCorrect ? 'correct' : 'wrong'}">${ans.selected}</span><br>
      Correct answer: <span class="correct">${ans.correct}</span>
    `;
    reviewList.appendChild(item);
  });
}

// Populate the reference table
const refTable = document.getElementById('ref-table-body');
thaiVowels.forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${item.vowel}</td><td>${item.sound}</td>`;
  refTable.appendChild(row);
});
