/**
 * index
 * get-native.com
 *
 * Created by henryehly on 2017/01/15.
 */

const Promise = require('bluebird');
const fs      = require('fs');
const k       = require('./config/keys.json');

const nconf = require('nconf');
//noinspection JSUnresolvedFunction
nconf.use('memory');
//noinspection JSUnresolvedFunction
nconf.argv();
//noinspection JSUnresolvedFunction
nconf.env();

const confPath = __dirname + '/config/environments/';

require(confPath + 'base');

const envConf  = confPath + (nconf.get(k.Env.Key) || k.Env.Development);
if (fs.existsSync(envConf)) {
    require(envConf);
}

const logger   = require('./config/logger');
const server   = require('./config/initializers/server');
const database = require('./app/models');
const mailer   = require('./config/initializers/mailer');

logger.info(`Initializing ${nconf.get(k.Env.Key).toUpperCase()} environment`);

const promises = [server(), database.sequelize.authenticate(), Promise.promisify(mailer.verify)()];

if (nconf.get(k.Env.Key) === k.Env.Development) {
    const MailDev = require('maildev');
    const mailServer = new MailDev();
    promises.push(Promise.promisify(mailServer.listen)());
}

module.exports = Promise.all(promises).spread(server => {
    logger.info('Initialization successful.');
    return server;
}).catch(e => {
    logger.info('Initialization failed with error', e, {json: true});
    return e;
});
