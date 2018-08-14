'use strict';

import {Item} from 'nightrun';
import {Scene} from 'nightrun';
import Spider from '../sprites/Spider.js';
import Player from '../sprites/Player.js';


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
        this.spider = new Spider(this);
        this.spider.setSpawn(600, 200);
    }

    preload() {
        super.preload();
        this.sword.preload();
        this.key.preload();
        this.potion.preload();
        this.player.preload();
        this.spider.preload();
    }

    create() {
        const player = this.player;
        this.sword.create();
        this.key.create();
        this.potion.create();
        this.spider.create();
        player.create();
        this.physics.add.overlap(player.sprite, this.sword.item, this.pickItem, null, this);
        this.physics.add.overlap(player.sprite, this.key.item, this.pickItem, null, this);
        this.physics.add.overlap(player.sprite, this.potion.item, this.pickItem, null, this);
        this.physics.add.overlap(player.sprite, this.spider.sprite, this.fight, null, this);
    }

    pickItem(player, item) {
        this.player.pickItem(item);
    }

    fight(player, spider) {
        this.player.fight(this.spider);
    }

    update() {
        this.player.update();
        this.spider.update();
        if (this.player.inventory.length == 3) {
            this.next('End');
        }
    }
}

export default FloorOne;
