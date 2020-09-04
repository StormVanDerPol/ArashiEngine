import loadModulesFromList from "../dataHandler/loadModule.js";

export default class ActorManager {

    actorTypes = {};

    loadActorTypes = async () => {

        this.actorTypes = await loadModulesFromList(
            'source/actor-list.json',
            'actorList',
            '../../source/actors/',
        );

    }

    baseID = 100;

    genID = () => {
        return ++this.baseID;
    };

    create = (name, params = {}) => {
        return new this.actorTypes[name](params);
    }

}