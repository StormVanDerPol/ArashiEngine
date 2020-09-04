export default class Render {

    resolution = null;

    setResolution = (ctx, w, h) => {

        this.resolution = {
            w,
            h,
        };

        ctx.canvas.width = w;
        ctx.canvas.height = h;
    }

    draw = (ctx, scene) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, this.resolution.w, this.resolution.h);

        if (scene.drawBackground)
            scene.drawBackground(ctx);

        for (const actor of scene.actorList) {
            if (actor.draw) {
                actor.draw(ctx);
            }
        }
    }
}