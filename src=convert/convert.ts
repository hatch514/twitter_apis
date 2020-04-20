const Jimp = require('jimp');

(async function () {
    const image = await Jimp.read('./Lenna.png');
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

    const x = 10;
    const y = 10;
    const message = 'Hello';
    image.print(font, x, y, message);

    image.write('./compositedLenna.png');
})();