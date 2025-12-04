export function start() {
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  const tracks = 4;
  const deer = [];

  for (let i = 0; i < tracks; i++) {
    const r = document.createElement("img");
    r.src = "assets/reindeer.png";
    r.style.position = "absolute";
    r.style.left = "10px";
    r.style.top = 20 + i * 90 + "px";
    r.style.width = "80px";

    container.appendChild(r);
    deer.push({ el: r, pos: 10 });
  }

  function race() {
    deer.forEach(d => {
      d.pos += Math.random() * 6;
      d.el.style.left = d.pos + "px";

      if (d.pos + 80 >= container.clientWidth) {
        alert("🏆 A reindeer wins!");
        start();
      }
    });

    requestAnimationFrame(race);
  }

  race();
}
