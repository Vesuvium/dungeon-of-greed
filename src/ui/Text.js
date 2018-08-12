class Text {
    constructor(game, x, y, text, style) {
        this.make = game.make;
        this.create(x, y, text, style);
    }

    create(x, y, text, style) {
        const options = {x: x, y: y, text: text, style: style};
        this.text = this.make.text(options);
    }

    origin(x, y) {
        this.text.setOrigin(x, y);
    }

    write(text) {
        this.text.setText(text);
    }

    destroy() {
        this.text.destroy();
    }
}


export default Text;
