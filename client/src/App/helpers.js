const moment = require('moment');

const helpers = {};

helpers.timeago = timestamp => {
    return moment(timestamp).startOf('minute').fromNow();
}

helpers.onDay = timestamp => {
    return moment(timestamp).calendar();
}

module.exports = helpers;