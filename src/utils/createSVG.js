const fs = require('fs')
const getDistro = require('./getDistro')

function createSVG() {
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="100%" height="100%" fill="#232729" />

<svg
   xmlns="http://www.w3.org/2000/svg"
   x="5%"
   y="15%"
   width="300"
   height="300"
   viewBox="0 0 135.47752 132.93699"
   version="1.1">
    ${getDistro()}
</svg>
  <text x="50%" y="15%" font-size="15" fill="#ffffff">
    <tspan x="50%" dy="1.2em" fill="#CFC047">guvenkarabulut@github.neofetch-for-readme</tspan>
    <tspan x="50%" dy="1.2em">------------------------------------------------------------</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">user_name</tspan>: Windows 10</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">first_name</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">last_name</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">technologies</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.6em"><tspan fill="#6EAF31">repo_count</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">star_count</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">commit_count</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em"><tspan fill="#6EAF31">pull_request_count</tspan>: DESKTOP-123456</tspan>
    <tspan x="50%" dy="1.2em">------------------------------------------------------------</tspan>
  </text>
  <rect x="50%" y="60%" width="30" height="30" fill="#2E3436" />
  <rect x="50%" y="65%" width="30" height="30" fill="#555753" />
  <rect x="54%" y="60%" width="30" height="30" fill="#CC0000" />
  <rect x="54%" y="65%" width="30" height="30" fill="#EF2929" />
  <rect x="58%" y="60%" width="30" height="30" fill="#C4A000" />
  <rect x="58%" y="65%" width="30" height="30" fill="#FCE94F" />
  <rect x="62%" y="60%" width="30" height="30" fill="#4E9A06" />
  <rect x="62%" y="65%" width="30" height="30" fill="#8AE234" />
  <rect x="66%" y="60%" width="30" height="30" fill="#3465A4" />
  <rect x="66%" y="65%" width="30" height="30" fill="#729FCF" />
  <rect x="70%" y="60%" width="30" height="30" fill="#75507B" />
  <rect x="70%" y="65%" width="30" height="30" fill="#AD7FA8" />
  <rect x="74%" y="60%" width="30" height="30" fill="#34E2E2" />
  <rect x="74%" y="65%" width="30" height="30" fill="#34E2E2" />

</svg>

    `;
  return svgContent;
}

module.exports = createSVG;
