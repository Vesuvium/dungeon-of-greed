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
        const player = this.player;
        this.sword.create();
        this.key.create();
        this.potion.create();
        player.create();
        this.physics.add.overlap(player.sprite, this.sword.item, this.pickItem, null, this);
        this.physics.add.overlap(player.sprite, this.key.item, this.pickItem, null, this);
        this.physics.add.overlap(player.sprite, this.potion.item, this.pickItem, null, this);
    }

    pickItem(player, item) {
        this.player.pickItem(item)
    }

    update() {
        this.player.update();
    }
}

export default FloorOne;
