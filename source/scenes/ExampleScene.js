import SceneBase from "../../library/scenes/SceneBase.js";
import arashi from "../../library/Arashi.js";

export default class ExampleScene extends SceneBase {
    constructor(params) {
        super(params);
    }

    // actorList = [
    //     ...this.actorList,
    //     arashi.actorManager.create('ExampleWarp', {
    //         x: 0,
    //         y: 0,
    //     }),
    // ];

    bg = (this.id % 2 == 0) ? '#5f5' : '#f5f';

    drawBackground = (ctx) => {

        const { resolution } = arashi.render;

        ctx.fillStyle = this.bg;
        ctx.fillRect(0, 0, resolution.w, resolution.h);
    }

}