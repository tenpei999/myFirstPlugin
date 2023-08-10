const fs = require('fs-extra');
const path = require('path');

// Copy icons from src/icons to build/static/img
fs.copySync(path.resolve(__dirname, 'src/icons'), path.resolve(__dirname, 'build/static/img'));