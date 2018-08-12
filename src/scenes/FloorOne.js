'use strict';

import Phaser from 'phaser';
import LoadingBar from '../ui/LoadingBar.js';
import Item from '../sprites/Item.js';
import Player from '../sprites/Player.js';


class FloorOne extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    init(phaser) {
        if (!this.phaser) {
            this.phaser = phaser;
            this.player = new Player(this);
            this.sword = new Item(this, 'sword');
            this.key = new Item(this, 'key');
            this.potion = new Item(this, 'potion');
        }
    }

    initControls() {
        this.keyboard = this.input.keyboard.createCursorKeys();
    }

    preload() {
        new LoadingBar(this);
        this.initControls();
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
