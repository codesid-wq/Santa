export class DayNight {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
  }

  draw() {
    const { canvas, ctx } = this;

    canvas.width = innerWidth;
    canvas.height = 550;

    const hour = new Date().getHours();
    const darkness = (hour >= 6 && hour <= 18) ? 0.1 : 0.55;

    ctx.fillStyle = `rgba(0,0,50,${darkness})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
