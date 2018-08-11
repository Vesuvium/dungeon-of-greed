'use strict';

class Preload {

    static preload(loader) {
        /* Loads all assets */
        loader.image('sword', 'assets/sword.png');
        loader.image('key', 'assets/key.png');
        loader.image('potion', 'assets/potion.png');
        loader.spritesheet('player',
            'assets/player.png',
            { frameWidth: 16, frameHeight: 20 }
        );
    }
}

export default Preload;
