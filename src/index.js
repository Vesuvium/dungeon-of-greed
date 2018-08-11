import 'phaser';

import Scene from './Scene.js';


const scene = new Scene();

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            scene.init(this);
            scene.preload();
        },
        create: function() {
            scene.create();
        },
        update: function() {
            scene.update();
        }
    }
};

new Phaser.Game(config);
