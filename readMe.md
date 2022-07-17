# Crypto-Train: A Practice marketplace where you can buy-sell tokens
#### This is a trading platform where you can register and will be alotted with some tokens to buy coins buy and sell at the right time to increase your overall wealth and progress on the leaderboard
## Components Involved
##### Coins
- Here we have introduced 6 coins (Inspired from the series game of thrones):
    - Lannister Coin
    - Stark Coin
    - Baratheon Coin
    - Targaryan Coin
    - Martel Coin
    - Greyjoy Coin
- Coins are following some real world crypto data in the backend and are mapped proper with the crypto data using a public third party API : api.coincap.io (very thankful to the public API)
- You can buy and sell the coins, buy the coin at low cost and hold till you make big profit on your purchase and sell back to market to get the profit, buying and selling at the right time is very important.

##### Graph
- Added a graph functionality to the platform. you can check the coins past graph for 1 day, 1 week, or 1 month and decide when to buys and when to sell.
- Garph will give you the current trend with the coins and market.

##### Leaderboard
- We have an overall leaderboard with all the registered users and there current holding value.
- Try to reach the top of the table and be a Champion

### Why I made crypto-train ?
I was and am always curious about the trading market . Both the stock-exchange and the crypto-world has been one of my friends for some time now. I started investing in these as soon as I turned 18. So, as a trainee myself, I wanted to create a platform where all can train themselves and have a playful environment.

### How we created crypto-train ?
I have build the whole web application on HTML5, CSS3, and JS frontend, with NodeJS as it's backend , and MongoDB as the database.
It is a crypto-currency training game, where you can buy and sell coins, and make a score for yourself on the Score-Board, while learning how to use crypto-tools

### Future Works
- Thinking of adding an event section where trading will take place for a specific period of time and atlast a winner will be announced
- Thinking of taking up tournament with prize to enouage people to practice trading with us
- I want to extend this project with more number of coins. 
- I want to add a section for users to see their past details. 
- I want to add a search option where the users can see the other users playing tactics also. 
- I want a section for discussions also, because I can't imagine how the discussion would be like.

### API Documentation
| Routes | Request | Response | Remark |
|--------|---------|----------|--------|
| ***/*** | {} | Home Page | Home page is visible from this route |
| ***/coin*** | {} | Coins Details Page | Graph and checkout section available on this page |
| ***/login*** | {} | Login or SignUp Page | Login with already existing account or create a new acction (SignUp) Page |
| ***/addUser*** | {Fname, Lname, Email, Password} | {True/False} | sign-up route to create a new user |
| ***/checkUser*** | {Email, Password} | {logged(True/False), data} | login route to check user exists |
| ***/updateToken*** | {Email, Pass, Token} | {true/false} | Updates the value of wallet, and coins |
| ***/getAll*** | {} | `[{users}]` | returns all the users registered |