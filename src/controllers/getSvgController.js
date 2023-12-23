const svg2img = require('svg2img'); 
const createSVG = require('../utils/createSVG');

async function get(req, res) {
    const svgContent = createSVG();
    svg2img(svgContent, (error, buffer) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.set('Content-Type', 'image/png');
            res.send(buffer);
        }
    });
};

module.exports = {
    get
};
