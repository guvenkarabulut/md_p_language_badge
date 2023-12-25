const createBadge = require('../utils/createBadge');
const svg2img = require('svg2img');

async function get(req, res) {
  const badgeColor = req.query.badge_color || '279';
  const borderColor = req.query.border_color || '279';
  const svgContent = createBadge(req.params.slug, badgeColor, borderColor)
  svg2img(svgContent, (error, buffer) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      res.set('Content-Type', 'image/png');
      res.send(buffer);
    }

  })
}

module.exports = {
  get
};

