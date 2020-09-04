import arashi from "../Arashi.js";

export default class SceneBase {

    constructor(params) {

        const { actorList } = params;

        if (actorList) {
            this.actorList = actorList;
        }
    }

    name = this.__proto__.constructor.name;
    id = arashi.sceneManager.genID();
    actorList = [];
}