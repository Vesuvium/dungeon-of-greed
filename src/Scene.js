'use strict';

import Item from './Item.js';
import Player from './Player.js';


class Scene {
    constructor() {
    }

    config(game) {
        if (!this.game) {
            this.game = game;
            this.load = game.load;
            this.add = game.add;
            this.player = new Player(game);
            this.sword = new Item(game, 'sword');
            this.key = new Item(game, 'key');
            this.potion = new Item(game, 'potion');
        }
    }

    initControls() {
        this.keyboard = this.game.input.keyboard.createCursorKeys();
    }

    preload() {
        /* Loads all assets */
        this.initControls();
        this.sword.preload();
        this.key.preload();
        this.potion.preload();
        this.player.preload('assets/player.png', { frameWidth: 16, frameHeight: 20 });
    }

    create() {
        /* Creates the scene objects */
        this.sword.create(200, 200);
        this.key.create(200, 100);
        this.potion.create(500, 400);
        this.player.create(300, 400);
    }

    update() {
        /* Updates the scene*/
        if (this.keyboard.left.isDown) {
            this.player.moveX(-10);
        }
        else if (this.keyboard.right.isDown) {
            this.player.moveX(10);
        }
        else if (this.keyboard.down.isDown) {
            this.player.moveY(10);
        }
        else if (this.keyboard.up.isDown) {
            this.player.moveY(-10);
        }
    }
}

export default Scene;
