

var http = require('http');
var express = require('express');
var TokensAPI = require('./../TokensAPI');

var TokensRouter = function() {
    'use strict';
    this.router = express.Router();
    this.tokensAPI = new TokensAPI();
};

TokensRouter.prototype = {

    init: function() {

        this.router.get('/tokens/:uuid', this.tokensAPI.getAll.bind(this.tokensAPI));

        this.router.post('/tokens', this.tokensAPI.create.bind(this.tokensAPI));

        this.router.delete('/tokens', this.tokensAPI.deleteToken.bind(this.tokensAPI));
    },

    getRouter: function() {
        return this.router;
    }
};

module.exports = TokensRouter;