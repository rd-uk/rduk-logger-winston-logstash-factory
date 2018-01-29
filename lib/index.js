const winston = require('winston');
require('winston-logstash');

module.exports = {
    create: function(options) {
        return [new winston.transports.Logstash(options)];
    }
};
