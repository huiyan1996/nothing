let idx=0, score=0, qs=[], userAnswers=[];
fetch('questions.json')
  .then(r=>r.json())
  .then(d=>{ qs = shuffle(d).slice(0,10); showQ(); });

function showQ() {
  const q = qs[idx];
  document.getElementById('question-container').textContent = `Q${idx+1}: ${q.question}`;
  const opts = shuffle(q.options);
  const div = document.getElementById('options');
  div.innerHTML = '';
  opts.forEach(opt => {
    const b = document.createElement('button');
    b.textContent = opt;
    b.className = 'option';
    b.onclick = ()=>selectAnswer(opt);
    div.appendChild(b);
  });
}

function selectAnswer(sel) {
  const q = qs[idx], ok = sel===q.correct;
  if(ok) score+=10;
  userAnswers.push({question:q.question, selected:sel, correct:q.correct, ok});
  idx++;
  if(idx<qs.length) showQ();
  else showReview();
}

function showReview() {
  // Clear question and options
  document.getElementById('question-container').classList.add('hidden');
  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';
  optsDiv.classList.add('hidden');
  const res = document.getElementById('result');
  res.classList.remove('hidden');
  res.textContent = `You scored ${score}/100`;
  const rc = document.getElementById('review-container');
  rc.classList.remove('hidden');
  const ul = document.getElementById('review-list');
  userAnswers.forEach((a,i)=>{
    const li = document.createElement('li');
    li.className = 'review-item';
    li.innerHTML = `<strong>Q${i+1}:</strong> ${a.question}<br>
      Your: <span class="${a.ok?'correct':'wrong'}">${a.selected}</span><br>
      Correct: <span class="correct">${a.correct}</span>`;
    ul.appendChild(li);
  });
  document.getElementById('replay-btn').onclick = ()=>location.reload();
}

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
