# Gotta Go
------------------------------------------
Link to deployed site [gotta-go](https://gotta-go-full.herokuapp.com/) 

Based off a users location, the site will serve up the user with the closest washroom (city of Ottawa public restroom or porta potty). An account is not required to use this function, however to submit a portta potty location a user must sign up.

## Data
This web application makes use of the city of Ottawa API for publicly availble restrooms. Furthermore, the website collects user submitted data for publicly availble washrooms not in the [city of Ottawa API](https://open.ottawa.ca/datasets/ottawa::public-washrooms/about).

## Tech
* Server built in Node.js with Express
* UI built with React using react-router-dom and reactstrap
* Database: PostgreSQL
* backend and front end deployed on Heroku

# 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




