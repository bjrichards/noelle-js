class Rect {
    /**
     * 
     * @param {float} x The x coordinate of the rect's top left corner
     * @param {float} y The y coordinate of the rect's top left corner
     * @param {float} width The width of the rect
     * @param {float} height The height of the rect
     */
    constructor(x, y, width, height) {
        this.setPosition(x, y);
        this.setSize(width, height);
        this.fillColor = "skyblue";
        this.strokeColor = "black";
        this.lineWidth = 1;

        this.fillFlag = false;
        this.strokeFlag = false;
    }

    /**
     * 
     * @returns {float} The x coordinate of the rect's top left corner
     */
    getX() { return this.x; }

    /**
     * 
     * @returns {float} The y coordinate of the rect's top left corner
     */
    getY() { return this.y; }

    /**
     * 
     * @returns {float} The x coordinate of the left side of rect
     */
    getLeft() { return this.getX(); }

    /**
     * 
     * @returns {float} The x coordinate of the right side of rect
     */
    getRight() { return this.getX() + this.getWidth(); }

    /**
     * 
     * @returns {float} The y coordinate of the top side of rect
     */
    getTop() { return this.getY(); }

    /**
     * 
     * @returns {float} The y coordinate of the bottom side of rect
     */
    getBottom() { return this.getY() + this.getHeight(); }

    /**
     * 
     * @returns {float} The width of the rect
     */
    getWidth() { return this.width; }

    /**
     * 
     * @returns {float} The height of the rect
     */
    getHeight() { return this.height; }

    /**
     * 
     * @returns {string} The color of the rect fill
     */
    getFillColor() { return this.fillColor; }

    /**
     * 
     * @returns {string} The color of the rect stroke
     */
    getStrokeColor() { return this.strokeColor; }

    /**
     * 
     * @returns {int} The width of the rect stroke
     */
    getLineWidth() { return this.lineWidth; }

    /**
     * 
     * @returns {bool} Whether or not the fill should be drawn on draw call
     */
    getFillFlag() { return this.fillFlag; }

    /**
     * 
     * @returns {bool} Whether or not the stroke should be drawn on draw call
     */
    getStrokeFlag() { return this.strokeFlag; }

    /**
     * 
     * @param {float} x The x coordinate to place the top left corner of the rect
     * @param {float} y The y coordinate to place the top left corner of the rect
     */
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {float} width The width to make the rect
     * @param {float} height The height to make the rect
     */
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * 
     * @param {string} color The color to make the rect's fill
     */
    setFillColor(color) { this.fillColor = color; }

    /**
     * 
     * @param {string} color The color to make the rect's stroke
     */
    setStrokeColor(color) { this.strokeColor = color; }

    /**
     * 
     * @param {int} lineWidth The width to make the rect's stroke
     */
    setLineWidth(lineWidth) { this.lineWidth = lineWidth; }

    /**
     * 
     * @param {bool} flag Whether or not the fill should be drawn on draw call
     */
    setFillFlag(flag) { this.fillFlag = flag; }

    /**
     * 
     * @param {bool} flag Whether or not the stroke should be drawn on draw call
     */
    setStrokeFlag(flag) { this.strokeFlag = flag; }

    /**
     * 
     * @param {CanvasContext} ctx Canvas context to draw the rect onto
     */
    draw(ctx) {
        if (this.fillFlag) {
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.strokeFlag) {
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = this.lineWidth;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

export { Rect }