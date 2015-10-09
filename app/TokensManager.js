var mongo = require('mongodb');
var db = require('monk')('localhost/tokensdb');

function TokensManager() {
    this.tokensCollection = db.get('tokens');
}


TokensManager.prototype = {

    findAllTokensOfUser: function(userUuid) {
        var promise = this.tokensCollection.find({useruuid: userUuid});
        return promise;
    },

    createToken: function(tokenData) {
        var promise = this.tokensCollection.insert(tokenData);
        return promise;
    },

    deleteToken: function(tokenId) {
        var promise = this.tokensCollection.remove({
            _id: tokenId
        });
        return promise;
    }

};

module.exports = TokensManager;