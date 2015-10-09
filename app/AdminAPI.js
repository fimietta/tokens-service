

var AdminAPI = function() {
    'use strict';

};

AdminAPI.prototype = {

    healthcheck: function(request, response) {
        response.send('You have requested an Healthcheck');
    },

    version: function(request, response) {
        response.send('You have requested the version');
    }

};

module.exports = AdminAPI;
