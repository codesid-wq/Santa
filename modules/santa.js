export class Santa {
  constructor(id, map) {
    this.el = document.getElementById(id);
    this.map = map;

    this.stops = [
      { name: "Tokyo", x: 0.76, y: 0.36 },
      { name: "Sydney", x: 0.87, y: 0.78 },
      { name: "Cairo", x: 0.53, y: 0.45 },
      { name: "London", x: 0.42, y: 0.30 },
      { name: "New York", x: 0.31, y: 0.38 },
      { name: "Rio de Janeiro", x: 0.37, y: 0.72 }
    ];

    this.index = 0;
    this.presents = 0;

    this.move();
    setInterval(() => this.move(), 4500);
  }

  move() {
    const stop = this.stops[this.index];
    const next = this.stops[(this.index + 1) % this.stops.length];

    this.el.style.left = stop.x * 100 + "%";
    this.el.style.top = stop.y * 100 + "%";

    document.getElementById("loc").innerText = stop.name;
    document.getElementById("next").innerText = next.name;

    this.presents += Math.floor(Math.random() * 600 + 200);
    document.getElementById("presents").innerText =
      this.presents.toLocaleString();

    this.index = (this.index + 1) % this.stops.length;
  }

  update() {
    // sprite animations can go here
  }
}
