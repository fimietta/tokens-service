/* global beforeEach, describe, it, expect, sinon */

'use strict';

var TokensManager = require('../../app/TokensManager');

describe('TokensManager', function() {

    var tokensManager;

    beforeEach(function() {
        tokensManager = new TokensManager();

        tokensManager.tokensCollection = {
            find: sinon.spy(),
            insert: sinon.spy(),
            remove: sinon.spy()
        };
    });

    it('should query the tokens collection in order to retrieve all the tokens created by the user ', function() {
        // Act
        tokensManager.findAllTokensOfUser(1111);

        // Assert
        expect(tokensManager.tokensCollection.find).to.have.been.calledWith({useruuid:1111});
    });


    it('should insert the new token in the collection', function() {
        // Act
        tokensManager.createToken({
            content: 'mycontent',
            maxAge: 123456,
            type: 'passwordreset'
        });

        // Assert
        expect(tokensManager.tokensCollection.insert).to.have.been.calledWith({
            content: 'mycontent',
            maxAge: 123456,
            type: 'passwordreset'
        });
    });


    it('should delete the token from the collection', function() {
        var tokenID = 1234;

        // Act
        tokensManager.deleteToken(tokenID);

        // Assert
        expect(tokensManager.tokensCollection.remove).to.have.been.calledWith({_id: 1234});
    });


});