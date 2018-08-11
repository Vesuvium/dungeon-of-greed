'use strict';

class Scene {
    constructor() {
    }

    config(game) {
        if (!this.game) {
            this.game = game;
            this.load = game.load;
            this.add = game.add;
        }
    }

    preload() {
        /* Loads all assets */
        this.load.image('sword', 'assets/sword.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('potion', 'assets/potion.png');
        this.load.spritesheet('player',
            'assets/player.png',
            { frameWidth: 16, frameHeight: 20 }
        );
    }

    create() {
        /* Creates the scene objects */
        this.add.image(200, 100, 'key');
        this.add.image(500, 400, 'potion');
    }

    update() {
        /* Updates the scene*/
    }
}

export default Scene;
