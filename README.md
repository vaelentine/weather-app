# weather-app
Allows a user to fetch up-to-date weather data for their location from the OpenWeather API   
<br>
![image](https://user-images.githubusercontent.com/26351860/135671606-8897b4df-710c-4c88-bd9a-d88363bca0db.png)


## To set up this app:
1. Clone this repo: 
- `git clone https://github.com/vaelentine/weather-app.git`

2. Go to https://home.openweathermap.org/users/sign_up, 
- register and obtain a free API key
- copy your api key from https://home.openweathermap.org/api_keys


3. At the root folder of your cloned repo, create a `.env` file and add the following key and value pair:
- `REACT_APP_WEATHER_API_KEY=<your api key>`

4. Install app and dependencies.
- run `npm install`

### ⚠️  Note that if you skip step 3
- you will see a warning banner on loading the app ❗
- and the app snapshot test will fail 💣 
- (For testing purposes, feel free to use my api key REACT_APP_WEATHER_API_KEY=9b1d1757d00d6749255000675acc1e01)

## Running the app:
Provided you did all of the prerequisites, you should now be able to run commands:
- To execute test suites, run `npm test` 
- To run in dev mode, run `npm start`. This will compile the app and start up a browser session at localhost:3000.

## Deploy to production:
- make sure 'serve' is installed, run `npm i serve -g`
- Prepare a production build `npm run build`
- Then, serve it with serve -s build -l <port number> (default port is 5000 if no port provided)
