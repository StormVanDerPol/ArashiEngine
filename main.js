import arashi from "./library/Arashi.js";

const
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var
    lastTime, deltaTime;

const main = () => {
    var now = Date.now();
    deltaTime = (now - lastTime) / 1000;

    arashi.update(deltaTime);
    arashi.draw(ctx);

    lastTime = now;

    requestAnimationFrame(main);
};

(() => {
    arashi.render.setResolution(ctx, 640, 480);
    arashi.init();
    lastTime = Date.now();
    main();
})();