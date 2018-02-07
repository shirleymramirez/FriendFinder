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

        var difference;
        var leastDifference;
        var bestUserMatchIndex;
        for (var i = 0; i < friendData.length; i++) {

            difference = 0;
            for (var j = 0; j < userResponse.length; j++) {
                difference += Math.abs(friendData[i].scores[j] - userResponse[j]);
            }

            // not yet initialized
            if (leastDifference === undefined) {
                leastDifference = difference;
                bestUserMatchIndex = i;
            }

            // if difference is smaller, its a better match
            // update the result
            if (difference < leastDifference) {
                leastDifference = difference;
                bestUserMatchIndex = i;
            }
        }

        console.log(bestUserMatchIndex);
        var friend = friendData[bestUserMatchIndex];

        friendData.push(newFriendData);

        res.json({
            status: "OK",
            matchName: friend.name,
            matchImage: friend.photo
        });
    });

}