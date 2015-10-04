'use strict';

var TokensAPI = function() {

};

TokensAPI.prototype = {

    getAll: function(request, response) {
        response.send('You have requested all the tokens of a specific user');
    },

    post: function (request, response) {
        response.send('You have post a token ');
    },

    get: function(request, response) {
        response.send('You have requested info about the token ' + request.params.uuid);
    },

    delete: function(request, response) {
        response.send('You have requested to delete the token ' + request.params.uuid);
    }

};

module.exports = TokensAPI;
