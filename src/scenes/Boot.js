import Scene from './Scene.js';
import Text from '../ui/Text.js';


class Boot extends Scene {
    init(phaser) {
        super.init(phaser);
    }

    create() {
        const x = this.cameras.main.width / 2;
        const y = this.cameras.main.height / 2;
        this.button = new Text(this, 'Start!', x, y, { fill: '#fff' }, {interactive: true});
        this.button.origin(0.5, 0.5);
        this.button.event('pointerdown', () => {
            this.next('FloorOne');
        });
    }
}


export default Boot;
