'use strict';

import Item from '../sprites/Item.js';
import Player from '../sprites/Player.js';
import Scene from './Scene.js';


class FloorOne extends Scene {
    init(phaser) {
        super.init(phaser, {loadingBar: true});
        this.player = new Player(this);
        this.sword = new Item(this, 'sword');
        this.key = new Item(this, 'key');
        this.potion = new Item(this, 'potion');
    }

    preload() {
        super.preload();
        this.sword.preload();
        this.key.preload();
        this.potion.preload();
        this.player.preload('assets/player.png', { frameWidth: 16, frameHeight: 20 });
    }

    create() {
        this.sword.create(200, 200);
        this.key.create(200, 100);
        this.potion.create(500, 400);
        this.player.create(300, 400);
    }

    update() {
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

export default FloorOne;
