/**
 * index
 * get-native.com
 *
 * Created by henryehly on 2017/03/14.
 */

const fs = require('fs');
const path = require('path');

let helpers = {};

fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(module.filename)) && (file.slice(-3) === '.js');
}).forEach((file) => {
    let moduleName = file.substring(0, file.length - 3)
        .replace(/\b\w/g, s => s.toUpperCase())
        .replace(/-/g, '');

    helpers[moduleName] = require(path.join(__dirname, file));
});

module.exports = helpers;
