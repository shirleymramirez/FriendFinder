# FriendFinder
Node and Express Servers dating app

## Overview
1. A compatibility-based "FriendFinder" application -- basically a dating app.
2. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. 
3. The app will then display the name and picture of the user with the best overall match. 

## Library Used
1. express 
2. body-parser  
3. path 

## Technology Used:
1. Used Express to handle routing
2. Javascript
3. Jquery
4. Ajax
5. Nodejs

## Hosting
2. Used Heroku for deployment for our backend application

## How the application works:
1. It will determine the user's most compatible friend using the following as a guide:
  - Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
  - With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
  - Example: 
      User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
      User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
      Total Difference: 2 + 1 + 2 = 5
  - Used the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
  - The closest match will be the user with the least amount of difference.
2. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
  - The modal should display both the name and picture of the closest match. 

## Getting started:
1. Clone this repo in your computer
2. Initialize a package.json file at your project root by running npm init
3. Install all the library(npm packages) used
4. Run `node server.js` 
5. Go to `localhost:3000` in your web browser.
## OR
6. Click this for the heroku [link](https://young-coast-19729.herokuapp.com/)

## Sample Screenshots:
 1. ![screen shot 2018-02-08 at 10 28 06 am](https://user-images.githubusercontent.com/31137669/35988112-d0092848-0cba-11e8-8091-e5e8fb4100c8.png)
 
2. ![screen shot 2018-02-08 at 10 31 45 am](https://user-images.githubusercontent.com/31137669/35988286-45922092-0cbb-11e8-9a5e-c91aed1b9b03.png)

3. ![screen shot 2018-02-08 at 10 33 02 am](https://user-images.githubusercontent.com/31137669/35988373-75d85bb8-0cbb-11e8-98ed-15c8c5382cd9.png)

4. ![screen shot 2018-02-08 at 10 33 53 am](https://user-images.githubusercontent.com/31137669/35988411-92b74de8-0cbb-11e8-8661-6cb9e34feb7c.png)





## Copyright
Copyright © 2018 Shirley Ramirez


