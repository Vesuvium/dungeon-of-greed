'use strict';

import Item from '../sprites/Item.js';
import Player from '../sprites/Player.js';
import Scene from './Scene.js';


class FloorOne extends Scene {
    init(phaser) {
        super.init(phaser, {loadingBar: true});
        this.player = new Player(this, {frameWidth: 16, frameHeight: 20});
        this.player.setSpawn(300, 400);
        this.sword = new Item(this, 'sword', {physics: true});
        this.sword.setSpawn(200, 200);
        this.key = new Item(this, 'key', {physics: true});
        this.key.setSpawn(200, 100);
        this.potion = new Item(this, 'potion', {physics: true});
        this.potion.setSpawn(500, 400);
    }

    preload() {
        super.preload();
        this.sword.preload();
        this.key.preload();
        this.potion.preload();
        this.player.preload();
    }

    create() {
        this.sword.create();
        this.key.create();
        this.potion.create();
        this.player.create();
    }

    update() {
        this.player.update();
    }
}

export default FloorOne;
