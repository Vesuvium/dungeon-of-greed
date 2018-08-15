import {Scene} from 'nightrun';
import {Text} from 'nightrun';


class Inventory extends Scene {
    init(phaser) {
        super.init(phaser);
    }

    create() {
        this.title = new Text(this, 'Inventory', 100, 100, {fill: '#fff', fontSize: '24px'});
    }
}

export default Inventory;
