const fs = require('fs');
const path = require('path');

function getDistro() {
    const filePath = path.join(__dirname, 'distro_svg/arch.svg');
    data = fs.readFileSync(filePath, 'utf8');
    return data;
}

module.exports = getDistro;
