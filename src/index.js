import 'phaser';

import Scene from './Scene.js';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: function() {},
        create: function() {},
        update: function() {
            this.scene.start('First');
        }
    }
};

const game = new Phaser.Game(config);
game.scene.add('First', Scene);
