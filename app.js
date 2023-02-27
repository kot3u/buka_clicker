let points = 0;
let pointsChange = 1;
const buka = document.getElementById('buka-button');
const pointsOutput = document.getElementById('points-value')
buka.addEventListener('click', function(){
  points += pointsChange;
  pointsOutput.textContent = points;
}  );