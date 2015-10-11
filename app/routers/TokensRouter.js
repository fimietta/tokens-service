

var http = require('http');
var express = require('express');
var TokensAPI = require('./../TokensAPI');

var TokensRouter = function() {
    'use strict';
    this.router = express.Router();
    this.user = {
        uuid: '326776'
    };
    this.tokensAPI = new TokensAPI(this.user);

};

TokensRouter.prototype = {

    init: function() {

        this.router.get('/tokens/', this.tokensAPI.getAll.bind(this.tokensAPI));

        this.router.get('/tokens/:uuid', this.tokensAPI.getById.bind(this.tokensAPI));

        this.router.post('/tokens', this.tokensAPI.create.bind(this.tokensAPI));

        this.router.delete('/tokens/:uuid', this.tokensAPI.delete.bind(this.tokensAPI));
    },

    getRouter: function() {
        return this.router;
    }
};

module.exports = TokensRouter;