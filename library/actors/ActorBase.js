import arashi from "../Arashi.js";

export default class ActorBase {

    constructor(params) {

    }

    name = this.__proto__.constructor.name;
    id = arashi.actorManager.genID();
}