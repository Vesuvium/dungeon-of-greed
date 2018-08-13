import Sprite from '../nightrun/Sprite.js';


class Monster extends Sprite {
    constructor(phaser, name, monsterOptions) {
        monsterOptions.physics = true;
        super(phaser, name, {frameWidth: 16, frameHeight: 16}, monsterOptions);
    }

    damage(damage) {
        /* Damages the monster */
        this.options.hp -= damage;
    }

    isAlive() {
        /* Whether the monster is alive */
        if (this.options.hp > 0) {
            return true;
        }
    }

    attack() {
        /* The attack value of the monster */
        return this.options.attack;
    }

    fight(target) {
        /* Fight against a target */
        target.damage(this.attack());
        if (target.isAlive()) {
            this.damage(target.attack());
        }
    }

    update() {
        if (this.options.hp <= 0) {
            this.sprite.destroy();
        }
    }

}

export default Monster;
