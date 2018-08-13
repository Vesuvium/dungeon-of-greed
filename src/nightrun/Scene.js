import Phaser from 'phaser';
import LoadingBar from './ui/LoadingBar.js';


class Scene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    init(phaser, options) {
        if (options) {
            this.loadingBar = options.loadingBar;
        }
    }

    initControls() {
        this.keyboard = this.input.keyboard.createCursorKeys();
    }

    preload() {
        if (this.loadingBar) {
            new LoadingBar(this);
        }
        this.initControls();
    }

    create() {

    }

    update() {

    }

    next(scene) {
        this.scene.start(scene);
    }
}

export default Scene;
