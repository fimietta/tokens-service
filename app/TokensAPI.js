var TokensManager = require('./TokensManager');

function TokensAPI() {
    'use strict';
    this.tokensManager = new TokensManager();
}

TokensAPI.prototype = {

    getAll: function(request, response) {
        var resultPromise = this.tokensManager.findAllTokensOfUser(request.params.uuid);
        resultPromise.success(this.sendData.bind(this, response));
    },

    getTokenByID: function(request,response) {

    },

    create: function (request, response) {
        var resultPromise = this.tokensManager.createToken(request.body.TokenRequest);
        resultPromise.success(this.sendData.bind(this, response));
    },

    deleteToken: function (request, response) {
        var resultPromise = this.tokensManager.deleteToken(request.params.uuid);
        resultPromise.success(this.sendData.bind(this, response));
    },

    sendData: function(response, data) {
        response.status(200);
        response.json(data);
    }
};

module.exports = TokensAPI;
