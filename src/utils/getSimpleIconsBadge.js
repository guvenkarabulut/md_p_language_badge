const icons = require('simple-icons');

function getSimpleIconsBadge(slug) {
  const targetIcon = icons[`si${slug[0].toUpperCase() + slug.slice(1)}`]

  return targetIcon.svg;
}

module.exports = getSimpleIconsBadge;
