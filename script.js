import { MapSystem } from "./modules/map.js";
import { Santa } from "./modules/santa.js";
import { Snow } from "./modules/snow.js";
import { DayNight } from "./modules/daynight.js";
import * as Games from "./modules/games/_export.js";

// export games to global space
window.Games = Games;

// init systems
const map = new MapSystem("map");
const santa = new Santa("santa", map);
const snow = new Snow("snow");
const dayNight = new DayNight("daynight");

// christmas countdown
function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25);
  const diff = christmas - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎄 Merry Christmas!";
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);

  document.getElementById("countdown").innerText = `${d}d ${h}h ${m}m`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// animation loop
function loop() {
  map.draw();
  snow.draw();
  dayNight.draw();
  santa.update();

  requestAnimationFrame(loop);
}
loop();
