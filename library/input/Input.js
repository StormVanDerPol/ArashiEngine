export default class Input {

    KEYS = {};

    pressed = {};

    setKey = (keyCode, state) => {

        var key = keyCode;

        for (var _keyCode in this.KEYS) {
            if (keyCode == _keyCode) {
                key = this.KEYS[keyCode];
                break;
            };
        };

        this.pressed[key] = state;
    };

    init = async () => {
        const res = await fetch("library/input/input-config.json");
        const config = await res.json();

        this.KEYS = config.keyAliases;

        window.addEventListener('keydown', ({ keyCode }) => {
            this.setKey(keyCode, true);
        });

        window.addEventListener('keyup', ({ keyCode }) => {
            this.setKey(keyCode, false);
        });

        window.addEventListener('blur', () => {
            this.pressed = {};
        });
    };

    keyDown = (key) => {
        return this.pressed[key];
    }
};