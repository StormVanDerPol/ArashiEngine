export default class Graphics {

    _preRotate = (ctx, x, y, w, h, a) => {
        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);
        ctx.rotate(a * Math.PI / 180);
    };

    _postRotate = (ctx, x, y, w, h, a) => {
        ctx.translate(-x - w / 2, y - h / 2);
        ctx.rotate(-a * Math.PI / 180);
        ctx.restore();
    };

    line = (ctx, x = 0, y = 0, x2 = 0, y2 = 0, w = 1, col = '#fff') => {

        ctx.beginPath();
        ctx.strokeStyle = col;
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = w;
        ctx.stroke();

    };

    shape = (ctx, x = 0, y = 0, w = 16, h = 16, a = 0, col = '#fff') => {

        //How 2 dynamic path???
        const path = new Path2D(`m ${-w / 2} ${-h / 2} l ${w / 2} ${h} l ${w / 2} ${-h} z `);

        this._preRotate(ctx, x, y, w, h, a);

        ctx.fillStyle = col;
        ctx.fill(path);

        this._postRotate(ctx, x, y, w, h, a);
    };

    rect = (ctx, x = 0, y = 0, w = 16, h = 16, a = 0, col = '#fff') => {

        this._preRotate(ctx, x, y, w, h, a);

        ctx.fillStyle = col;
        ctx.fillRect(-w / 2, -h / 2, w, h);

        this._postRotate(ctx, x, y, w, h, a);
    };
}