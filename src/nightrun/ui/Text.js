class Text {

    constructor(phaser, text, x, y, style, options) {
        this.phaser = phaser;
        this.create(text, x, y, style, options);
    }

    create(text, x, y, style, options) {
        this.text = this.phaser.add.text(x, y, text, style);
        if (options) {
            if (options.interactive) {
                this.text.setInteractive();
            }
        }
    }

    origin(x, y) {
        this.text.setOrigin(x, y);
    }

    write(text) {
        this.text.setText(text);
    }

    event(event, f) {
        this.text.on(event, f);
    }

    destroy() {
        this.text.destroy();
    }
}


export default Text;
