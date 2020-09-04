export default class Pad {

    pads = {};

    BUTTONS = {};

    init = async () => {

        const res = await fetch("library/input/input-config.json");
        const config = await res.json();

        this.BUTTONS = config.buttonAliases;

        window.addEventListener("gamepadconnected", ({ gamepad }) => {
            this.update();
        });

        window.addEventListener("gamepaddisconnected", ({ gamepad }) => {
            this.update();
        });
    };

    update = () => {
        this.pads = navigator.getGamepads();
    }

    buttonDown = (padIndex, button) => {

        const pad = this.pads[padIndex];

        if (pad) {
            return pad.buttons[button].pressed;
        } else return false;
    };

}