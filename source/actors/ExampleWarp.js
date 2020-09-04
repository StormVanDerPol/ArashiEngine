import ActorBase from "../../library/actors/ActorBase.js";
import arashi from "../../library/Arashi.js";

export default class ExampleWarp extends ActorBase {
    constructor(params) {
        super(params);

        const {
            x = 16,
            y = 16,
            w = 32,
            h = 32,
            a = 0,
            col = '#f55'
        } = params;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
        this.col = col;
    }

    playerInstances = null;

    update = (dt) => {

        if (!this.playerInstances) {
            this.playerInstances = arashi.currentScene.actorList.filter(e => e.name == 'ExamplePlayer');
        }

        for (const instance of this.playerInstances) {
            if (arashi.collision.aabb(this, instance)) {
                const id = arashi.sceneManager.create('ExampleScene', {
                    actorList: [
                        instance,
                        arashi.actorManager.create('ExampleWarp', {
                            x: Math.random() * 640,
                            y: Math.random() * 480,
                        }),
                    ],
                });

                arashi.currentScene = arashi.sceneManager.get(id);
                break;
            };
        }

    };

    draw = (ctx) => {

        if (!this.playerInstances) {
            this.playerInstances = arashi.currentScene.actorList.filter(e => e.name == 'ExamplePlayer');
        }

        arashi.graphics.rect(ctx, this.x, this.y, this.w, this.h, this.a, this.col);

        for (const player of this.playerInstances) {

            arashi.graphics.line(ctx, this.x + this.w / 2, this.y + this.h / 2, player.x + player.w / 2, player.y + player.h / 2)
        }
    };
}