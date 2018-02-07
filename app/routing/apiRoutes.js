var friendData = require('../data/friends.js');

module.exports = function(app) {

    // a GET route with the url /api/friends will display a JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    // A POST routes this will be used to handle incoming survey results.
    app.post('/api/friends', function(req, res) {

        var newFriendData = req.body;

        var userResponse = newFriendData.scores;
        console.log(userResponse);

        var index = [];

        for (var i = 0; i < friendData.length; i++) {

            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friendData[i].scores[j] - userResponse[j]);
            }

            index[i] = diff;
            // index.push(diff);

        }

        var smallDif = index[0];
        var userIndex = 0;

        for (var i = 0; i < index.length; i++) {

            if (smallDif >= index[i]) {
                userIndex = i;
                smallDif = index[i];
            }
        }

        var friend = friendData[userIndex];

        res.json({
            status: "OK",
            matchName: friend.name,
            matchImage: friend.photo
        });
    });

}