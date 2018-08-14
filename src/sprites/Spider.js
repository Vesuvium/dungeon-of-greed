import {Monster} from 'nightrun';


class Spider extends Monster {
    constructor(phaser) {
        const options = {physics: true, hp: 1, attack: 1};
        super(phaser, 'spider', options);
    }
}


export default Spider;
