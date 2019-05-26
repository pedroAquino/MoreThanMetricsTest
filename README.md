## More Than Metrics Frontend Task

This is a test made for more than metrics frontend position.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Stack
- React is the main ui library,
- Redux for state management,
- Flow for static type checking
- JSS for CSS in JS stylesheets
- JEST for unit tests

## Features
Follows a brief summary of the features that I was able to complete compared with what was required.

- [x] Layout and Ui according to invision specs 
- [x] From header only make Name of persona real without editing functionality.
- [x] User should be able to drag “elements” from sidebar to persona field columns. For this task please add just “Short text” element. 
- [x] Persona has main info: avatar, color, name and initials. Please implement Name and Initials editing
 - [x] When user changes name, initials should automatically take first 3 letters and uppercase them. Initials also should be editable on their own
 - [x] Empty name or initials should make respective field have red background visualising failed validation
 - [x]  Data should be saved on ~input~ blur automatically (just console output, no real backend needed). 
 - [x]  Persona has two columns, for this task they are not editable.
 - [x] Fields could be dragged into columns (just the wide column is working for dragging)
 - [ ] dragged between columns and dragged within single column for sorting
 - [x] For this task please add just “Short text” field. Field title not editable, just put field type there. Change the “cog” icon to “trash bin” and make it delete the field on click. 
 - [x] Text field data should be saved on blur. 
 - [ ]  Any change in field position should be saved

## Automated Tests
Please note that I built tests for all the business and state management functions. You can run then with `npm test`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

