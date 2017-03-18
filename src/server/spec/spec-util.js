/**
 * spec-util
 * get-native.com
 *
 * Created by henryehly on 2017/03/03.
 */

const request = require('supertest');
const exec    = require('child_process').exec;

module.exports.defaultTimeout = 30000;

module.exports.seedAll = function(done) {
    this.seedAllUndo(function() {
        exec('npm run sequelize db:seed:all', function() {
            done();
        });
    });
};

module.exports.seedAllUndo = function(done) {
    exec('npm run sequelize db:seed:undo:all', function() {
        done();
    });
};

module.exports.login = function(cb) {
    delete require.cache[require.resolve('../index')];

    require('../index').then(function(_) {
        server = _;

        request(_).post('/login').send({
            email: 'test@email.com',
            password: 'test_password'
        }).then(function(response) {
            cb(_, 'Bearer: ' + response.header['x-gn-auth-token'], response.body);
        });
    });
};

module.exports.isNumber = function(value) {
    return new RegExp(/^[0-9]+$/).test(value);
};

module.exports.isParsableDateValue = function(value) {
    return new Date(value).toDateString() !== 'Invalid Date';
};
