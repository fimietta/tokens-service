var http = require('http');
var express = require('express');
var AdminAPI = require('./../AdminAPI');

function AdminRouter() {
    'use strict';
    this.router = express.Router();
    this.adminAPI = new AdminAPI();
}

AdminRouter.prototype = {

    init: function() {

        this.router.get('/healthcheck/', this.adminAPI.healthcheck);

        this.router.get('/version', this.adminAPI.version);

    },

    getRouter: function() {
        return this.router;
    }
};

module.exports = AdminRouter;