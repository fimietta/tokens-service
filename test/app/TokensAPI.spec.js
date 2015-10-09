/* global beforeEach, describe, it, expect, sinon */

'use strict';

var TokensAPI = require('../../app/TokensAPI');

describe('TokensAPI', function() {

    var tokensAPI,
        request,
        response,
        fakePromise;

    beforeEach(function() {
        tokensAPI = new TokensAPI();

        request = { params: {}, body: {}};
        response = {
            json: sinon.spy(),
            status: sinon.spy()
        },
        fakePromise = {
            success: function(callback) {
                var data = [
                    {
                        _id: "56177e04549220a3b38eb26e",
                        content: "assHJJJJaaaa",
                        type: "passwordreset",
                        expirydate: "10-10-2014Z10:00",
                        useruuid: "326776"
                    }
                ];
                callback.apply(tokensAPI, [data]);
            }
        };

    });


    it('should ask at the token manager the list of the tokens of a user ', function() {
        // Arrange
        var spyFindAllTokensOfUser = sinon.spy(tokensAPI.tokensManager, 'findAllTokensOfUser');
        request.params.uuid = 333333;

        // Act
        tokensAPI.getAll(request, response);

        // Assert
        expect(spyFindAllTokensOfUser).to.have.been.calledWith(333333);

        // Teardown
        spyFindAllTokensOfUser.restore();
    });

    it('should respond with the list of the tokens', function() {
        // Arrange
        var stubFindAllTokensOfUser = sinon.stub(tokensAPI.tokensManager, 'findAllTokensOfUser', function() {
            return fakePromise;
        });

        var expectedResponse =[
                {
                    _id: "56177e04549220a3b38eb26e",
                    content: "assHJJJJaaaa",
                    type: "passwordreset",
                    expirydate: "10-10-2014Z10:00",
                    useruuid: "326776"
                }
            ];
        // Act
        tokensAPI.getAll(request, response);

        // Assert
        expect(response.json).to.have.been.calledWith(expectedResponse);

        // Teardown
        stubFindAllTokensOfUser.restore();
    });


    it('should ask at the token manager to create a new token ', function() {
        // Arrange
        var spyCreate = sinon.spy(tokensAPI.tokensManager, 'createToken');
        request.body.TokenRequest = {};

        // Act
        tokensAPI.create(request, response);

        // Assert
        expect(spyCreate).to.have.been.called;

        // Teardown
        spyCreate.restore();
    });


    it('should ask at the token manager to delete a token given its id', function() {
        // Arrange
        var spyDelete = sinon.spy(tokensAPI.tokensManager, 'deleteToken');
        request.params.uuid = 1234;

        // Act
        tokensAPI.deleteToken(request, response);

        // Assert
        expect(spyDelete).to.have.been.called;

        // Teardown
        spyDelete.restore();
    });





});