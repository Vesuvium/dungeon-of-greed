import Text from './Text.js';


class LoadingBar {
    constructor(game) {
        this.game = game;
        this.create();
    }

    create() {
        const width = this.game.cameras.main.width;
        const halfWidth = width / 2;
        const height = this.game.cameras.main.height;
        const style = {font: '18px monospace', fill: '#ffffff'};
        this.box = this.game.add.graphics();
        this.box.fillStyle(0x222222, 0.8);
        this.box.fillRect(240, 270, 320, 50);
        this.bar = this.game.add.graphics();
        console.log(this.bar);
        this.loadingText = new Text(this.game, halfWidth, (height/2-50), 'Loading...', style);
        this.loadingText.origin(0.5, 0.5);
        this.percentage = new Text(this.game, halfWidth, (height/2-5), '0%', style);
        this.percentage.origin(0.5, 0.5);
        this.game.load.on('progress', this.progress());
        this.game.load.on('complete', this.complete());
    }

    progress() {
        return (value) => {
            this.bar.clear();
            this.bar.fillStyle(0xffffff, 1);
            this.bar.fillRect(250, 280, 300 * value, 30);
            const percentage = parseInt(value * 100);
            this.percentage.write(`${percentage}%`);
        }
    }

    complete() {
        return (value) => {
            this.bar.destroy();
            this.box.destroy();
            this.percentage.destroy();
            this.loadingText.destroy();
        }
    }
}


export default LoadingBar;
