const milestones = document.querySelectorAll('.milestone');
let current = 0;
function showMilestone(index) {
  milestones.forEach(m => m.classList.remove('active'));
  
  if (index >= milestones.length) {
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('finale').style.display = 'flex';
    return;
  }
  
  milestones[index].classList.add('active');
}

document.getElementById('home-btn').addEventListener('click', () => {
  document.getElementById('timeline').style.display = 'none';
  document.getElementById('finale').style.display = 'none';
  document.getElementById('landing').style.display = 'flex';
  current = 0;
  milestones.forEach(m => m.classList.remove('active'));
  showMilestone(0);
});

showMilestone(0);

document.getElementById('next-btn').addEventListener('click', () => {
  current = current + 1;
  showMilestone(current);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (current > 0) {
    current = current - 1;
    showMilestone(current);
  }
});

document.getElementById('begin-btn').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('timeline').style.display = 'block';
});

document.getElementById('finale-back-btn').addEventListener('click', () => {
  document.getElementById('finale').style.display = 'none';
  document.getElementById('timeline').style.display = 'block';
  current = milestones.length - 1;
  showMilestone(current);
});
