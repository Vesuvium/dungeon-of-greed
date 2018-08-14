import {Scene} from 'nightrun';
import {Text} from 'nightrun';


class End extends Scene {
    init(phaser) {
        super.init(phaser);
    }

    create() {
        const x = this.cameras.main.width / 2;
        const y = this.cameras.main.height / 2;
        this.text = new Text(this, 'Victory!', x, y, {fill: '#fff'});
        this.text.origin(0.5, 0.5);
    }

}

export default End;
