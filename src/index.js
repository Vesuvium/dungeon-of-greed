import 'phaser';

import Preload from './Preload.js';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            Preload.preload(this.load);
        },
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);



function create (){
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
}

function update() {

}
