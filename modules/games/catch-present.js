export function start() {
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  const present = document.createElement("img");
  present.src = "assets/present.png";
  present.style.position = "absolute";
  present.style.width = "70px";
  container.appendChild(present);

  let score = 0;

  const scoreBox = document.createElement("div");
  scoreBox.style.position = "absolute";
  scoreBox.style.top = "10px";
  scoreBox.style.left = "10px";
  scoreBox.style.fontSize = "22px";
  scoreBox.innerText = "Score: 0";
  container.appendChild(scoreBox);

  function movePresent() {
    present.style.left = Math.random() * (container.clientWidth - 70) + "px";
    present.style.top = Math.random() * (container.clientHeight - 70) + "px";
  }

  present.addEventListener("click", () => {
    score++;
    scoreBox.innerText = "Score: " + score;
    movePresent();
  });

  movePresent();
}
