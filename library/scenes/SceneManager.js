import loadModulesFromList from "../dataHandler/loadModule.js";

export default class SceneManager {

    //store scene classes
    scenes = {};

    //load scene classes dynamically
    loadScenes = async () => {

        this.scenes = await loadModulesFromList(
            'source/scene-list.json',
            'sceneList',
            '../../source/scenes/',
        );
    }

    baseID = 100;

    genID = () => {
        return ++this.baseID;
    };

    //store scene instances by id
    cache = {};

    //Creates new scene, returns id
    create = (sceneName, params = {}) => {

        const
            _scene = this.scenes[sceneName],
            scene = new _scene(params);

        this.cache[scene.id] = scene;

        console.log('SCENE CACHE', this.cache);
        return scene.id;
    };

    //returns instantiated scene by id
    get = (id) => {
        return this.cache[id];
    }
}