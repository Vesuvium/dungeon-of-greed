import {Scene} from 'nightrun';
import {Text} from 'nightrun';
import version from '../Version.js';

class Boot extends Scene {
    init(phaser) {
        super.init(phaser);
    }

    create() {
        const x = this.cameras.main.width / 2;
        const y = this.cameras.main.height / 2;
        this.title = new Text(this, 'Dungeon of Greed', x, 200, {fill: '#fff', fontSize: '24px'});
        this.title.origin(0.5, 0.5);
        this.button = new Text(this, 'Start!', x, y, { fill: '#fff' }, {interactive: true});
        this.button.origin(0.5, 0.5);
        this.button.event('pointerdown', () => {
            this.next('FloorOne');
        });
        this.versionText = new Text(this, `Version ${version}`, x, 550, {fill: '#fff', fontSize: '14px'});
        this.versionText.origin(0.5, 0.5);
    }
}


export default Boot;
