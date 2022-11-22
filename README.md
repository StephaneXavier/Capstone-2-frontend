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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


