export function start() {
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  const emojis = ["🎁","🎄","⭐","🧦","⛄","🦌"];
  let cards = [...emojis, ...emojis];

  // shuffle
  cards.sort(() => Math.random() - 0.5);

  let first = null;
  let lock = false;

  cards.forEach(symbol => {
    const card = document.createElement("div");
    card.style.width = "60px";
    card.style.height = "60px";
    card.style.background = "rgba(255,255,255,0.2)";
    card.style.borderRadius = "6px";
    card.style.display = "inline-flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    card.style.fontSize = "40px";
    card.style.margin = "8px";
    card.style.cursor = "pointer";

    let revealed = false;
    let matched = false;

    card.addEventListener("click", () => {
      if (lock || matched) return;

      card.innerText = symbol;

      if (!first) {
        first = { card, symbol };
      } else {
        lock = true;

        setTimeout(() => {
          if (first.symbol === symbol) {
            first.card.style.opacity = "0.3";
            card.style.opacity = "0.3";
            matched = true;
          } else {
            first.card.innerText = "";
            card.innerText = "";
          }

          first = null;
          lock = false;
        }, 700);
      }
    });

    container.appendChild(card);
  });
}
