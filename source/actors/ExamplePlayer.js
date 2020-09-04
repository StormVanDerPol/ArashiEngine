import ActorBase from "../../library/actors/ActorBase.js";
import arashi from "../../library/Arashi.js";

export default class ExamplePlayer extends ActorBase {
    constructor(params) {
        super(params);

        const {
            x = 16,
            y = 16,
            w = 16,
            h = 16,
            a = 0,
        } = params;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
    }

    xv = 0;
    yv = 0;

    move = (dt) => {

        const { KEYS } = arashi.input;
        const { BUTTONS } = arashi.pad;

        if (arashi.input.keyDown(KEYS.RIGHT) || arashi.pad.buttonDown(1, BUTTONS.DPAD_RIGHT)) {
            this.xv = 240;
        } else if (!arashi.input.keyDown(KEYS.LEFT)) {
            this.xv = 0;
        }

        if (arashi.input.keyDown(KEYS.LEFT)) {
            this.xv = -240;
        } else if (!arashi.input.keyDown(KEYS.RIGHT)) {
            this.xv = 0;
        }

        if (arashi.input.keyDown(KEYS.DOWN)) {
            this.yv = 240;
        } else if (!arashi.input.keyDown(KEYS.UP)) {
            this.yv = 0;
        }

        if (arashi.input.keyDown(KEYS.UP)) {
            this.yv = -240;
        } else if (!arashi.input.keyDown(KEYS.DOWN)) {
            this.yv = 0;
        }

        this.x += this.xv * dt;
        this.y += this.yv * dt;
    }

    update = (dt) => {

        this.move(dt);

    };

    draw = (ctx) => {
        arashi.graphics.rect(ctx, this.x, this.y, this.w, this.h, this.a);
    };
}