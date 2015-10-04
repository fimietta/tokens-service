'use strict';

var http = require('http');
var express = require('express');
var TokensAPI = require('./../TokensAPI');

var TokensRouter = function() {
    this.router = express.Router();
    this.tokensAPI = new TokensAPI();
};

TokensRouter.prototype = {

    init: function() {

        this.router.get('/tokens/', this.tokensAPI.getAll);

        this.router.get('/tokens/:uuid', this.tokensAPI.get);

        this.router.post('/tokens', this.tokensAPI.post);

        this.router.delete('/tokens/:uuid', this.tokensAPI.delete);

    },

    getRouter: function() {
        return this.router;
    }
};

module.exports = TokensRouter;