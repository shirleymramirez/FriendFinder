var friendData = require('../data/friends.js');

module.exports = function(app) {

    // a GET route with the url /api/friends will display a JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    // A POST routes this will be used to handle incoming survey results.
    app.post('/api/friends', function(req, res) {
        // console.log(req);
        // console.log(res);

        var newFriendData = req.body;
        console.log(newFriendData);

        var userResponse = newFriendData.scores;

        console.log("userResponse: ", userResponse);

        for (var i = 0; i < friendData.length; i++) {
            console.log(JSON.stringify(friendData[i].scores));

            if () {

            }

            // for (var i = 0; i < ) {

            // }
        }

        friendData.push(newFriendData);

        res.json(newFriendData);
    });

}