export class MapSystem {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.image = new Image();
    this.image.src = "assets/world-map.jpg";

    this.zoom = 1;
    this.offsetX = 0;
    this.offsetY = 0;

    this.canvas.addEventListener("wheel", e => {
      e.preventDefault();
      this.zoom += -e.deltaY * 0.001;
      this.zoom = Math.max(1, Math.min(3, this.zoom));
    });
  }

  draw() {
    const { ctx, canvas, image } = this;
    canvas.width = innerWidth;
    canvas.height = 550;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      image,
      0,
      0,
      canvas.width * this.zoom,
      canvas.height * this.zoom
    );
  }
}
