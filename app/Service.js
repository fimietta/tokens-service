var http = require('http');
var express = require('express');
var bodyParser  = require('body-parser');
var swaggerUiMiddleware = require('swagger-ui-middleware');
var TokensRouter = require('./routers/TokensRouter');
var AdminRouter = require('./routers/AdminRouter');

var Service = function() {

};

Service.prototype = {

    start: function(port) {
        var app = express(),
            tokensRouter = new TokensRouter(),
            adminRouter = new AdminRouter();

        swaggerUiMiddleware.hostUI(app, {overrides: __dirname + '/../swagger-ui/'});

        tokensRouter.init();
        adminRouter.init();

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use('/api', tokensRouter.getRouter());
        app.use('/admin', adminRouter.getRouter());


        var server = http.createServer(app);
        server.listen(port, function() {
            console.log('Service started on port ' + port);
        });

        return server;
    }
};

module.exports = Service;