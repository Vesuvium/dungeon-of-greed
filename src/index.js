import 'phaser';

import Scene from './Scene.js';


const scene = new Scene();

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            scene.config(this);
            scene.preload();
        },
        create: function() {
            scene.create();
        },
        update: function() {
            scene.update();
        }
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
