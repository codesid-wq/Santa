export class Snow {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.flakes = [];
    for (let i = 0; i < 200; i++) {
      this.flakes.push({
        x: Math.random() * innerWidth,
        y: Math.random() * 550,
        speed: Math.random() * 1 + 0.5,
        size: Math.random() * 2 + 1
      });
    }
  }

  draw() {
    const { ctx, canvas, flakes } = this;

    canvas.width = innerWidth;
    canvas.height = 550;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";

    flakes.forEach(f => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();

      f.y += f.speed;
      if (f.y > canvas.height) {
        f.y = -10;
        f.x = Math.random() * canvas.width;
      }
    });
  }
}
