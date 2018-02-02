var friendData = require('../data/friends.js');

module.exports = function(app) {

    // a GET route with the url /api/friends will display a JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    // A POST routes this will be used to handle incoming survey results.
    app.post('/api/friends', function(req, res) {

        var newFriendData = req.body;

        friendData.push(newFriendData);

        res.json(newFriendData);
    });

}