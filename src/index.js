import 'phaser';

import Boot from './scenes/Boot.js';
import End from './scenes/End.js';
import FloorOne from './scenes/FloorOne.js';
import Inventory from './scenes/Inventory.js';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: function() {},
        create: function() {},
        update: function() {
            this.scene.start('Boot');
        }
    }
};

const game = new Phaser.Game(config);
game.scene.add('Boot', Boot);
game.scene.add('Inventory', Inventory);
game.scene.add('FloorOne', FloorOne);
game.scene.add('End', End);
