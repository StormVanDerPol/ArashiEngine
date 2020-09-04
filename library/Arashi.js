import Input from "./input/Input.js";
import Pad from "./input/Pad.js";
import Render from "./graphics/Render.js";
import ActorManager from "./actors/ActorManager.js";
import SceneManager from "./scenes/SceneManager.js";
import Graphics from "./graphics/Graphics.js";
import Collision from "./Collision/Collision.js";

class Arashi {

    input = new Input();
    pad = new Pad();
    render = new Render();
    graphics = new Graphics();
    collision = new Collision();
    actorManager = new ActorManager();
    sceneManager = new SceneManager();

    currentScene = null;

    hasInit = false;

    init = async () => {

        this.input.init();
        this.pad.init();

        await this.actorManager.loadActorTypes();
        await this.sceneManager.loadScenes();

        const id = this.sceneManager.create('ExampleScene', {
            actorList: [
                arashi.actorManager.create('ExampleWarp', {
                    x: Math.random() * 640,
                    y: Math.random() * 480,
                }),
                arashi.actorManager.create('ExamplePlayer', {
                    x: 256,
                    y: 256,
                }),
            ]
        });

        this.currentScene = this.sceneManager.get(id);

        this.hasInit = true;
    };

    update = (dt) => {
        if (this.hasInit) {

            this.pad.update();

            if (this.currentScene.update)
                this.currentScene.update(dt);

            for (const actor of this.currentScene.actorList) {
                if (actor.update) {
                    actor.update(dt);
                }
            }
        }
    };

    draw = (ctx) => {
        if (this.hasInit) {
            this.render.draw(ctx, this.currentScene);
        };
    };
};

const arashi = new Arashi

export default arashi;