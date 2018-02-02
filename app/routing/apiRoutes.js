var friendData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friend', function(req, res) {
        res.json(friendData);
    });
}