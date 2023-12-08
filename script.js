let clutter = "";
let timer = 60;
let score = 0;
let scoreInc = 0;

function scoreINC() {
  score += 10;
  document.querySelector(".scoredisplay1").textContent = score;
}

function newHit() {
  scoreInc = Math.floor(Math.random() * 10);
  document.querySelector(".scoredisplay2").textContent = scoreInc;
}
function makeBubbles() {
  for (let i = 1; i <= 189; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubbles all-centre ">${num}</div>`;
  }

  document.querySelector(".main-play-area").innerHTML = clutter;
}

function timerplay() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".scoredisplay3").textContent = timer;
    } else {
      clearInterval(timer);
      document.querySelector(
        ".main-play-area"
      ).innerHTML = `<h1> GAME OVER </h1>`;
    }
  }, 1000);
}

document
  .querySelector(".main-play-area")
  .addEventListener("click", function (dets) {
    let clickerNum = Number(dets.target.textContent);
    if (clickerNum === scoreInc) {
      newHit();
      scoreINC();
    }
  });

newHit();
timerplay();
makeBubbles();
