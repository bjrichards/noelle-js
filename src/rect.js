class Rect {
    constructor(x, y, width, height) {
        this.setPosition(x, y);
        this.setSize(width, height);
        this.fillColor = "skyblue";
        this.strokeColor = "black";
        this.lineWidth = 15;

        this.fillFlag = false;
        this.strokeFlag = false;
    }

    getX() { return this.x; }
    getY() { return this.y; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
    getFillColor() { return this.fillColor; }
    getStrokeColor() { return this.strokeColor; }
    getLineWidth() { return this.lineWidth; }
    getFillFlag() { return this.fillFlag; }
    getStrokeFlag() { return this.strokeFlag; }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    setFillColor(color) { this.fillColor = color; }
    setStrokeColor(color) { this.strokeColor = color; }
    setLineWidth(lineWidth) { this.lineWidth = lineWidth; }
    setFillFlag(flag) { this.fillFlag = flag; }
    setStrokeFlag(flag) { this.strokeFlag = flag; }

    draw(ctx) {
        if (this.fillFlag) {
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.strokeFlag) {
            ctx.strokeStyle = this.strokeColor;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

export { Rect }