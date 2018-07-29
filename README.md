Get Started

Clone the project git clone https://github.com/viktimolog/home-expenses.git

Change the directory cd home-expenses

Install all dependencies npm install or yarn install

Run yarn start or npm start

Attention!
By default the application use the heroku server: https://evening-sands-78848.herokuapp.com
Thus it’s likely you can’t obtain the verification link for a new user. Heroku isn’t configured for it yet.

In this case, we highly recommend to use the blank pre-registered user profile:
email: test@test.net
password: test@test.net

If you need to test a new unique user, registered by you, then:

1. Replace const baseApiUrl = 'https://evening-sands-78848.herokuapp.com/api/‘
with const baseApiUrl = 'http://localhost:7777/api/‘ in the file: /home-expenses/src/constants/Urls.js
2. Start the new local server: https://github.com/viktimolog/home-expenses-server.git by following its respective Readme.md
3. cd home-expenses and npm start or yarn start
4. Pay attention, you should have the free ports 3000 and 7777



