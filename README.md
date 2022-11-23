# Resize Image API

## Description

This API functions as a image resizing tool using `sharp`

## Endpoints:

1. 'Resize' : url/resize?filename&width&height
   
   Example for hitting endpoint using provided images : `localhost:3000/fjord&width=400&height=200`

## Setup

### Installation

1. clone this repo.
2. `cd` to root dir of project.
3. run `npm install` to install project dependancies.

### Running the project

1. run `npm run prod:start`, this will build the project to javascript and run the `index.js` file.
2. go to you browser and hit the resize endpoint.
3. You will see the rezied image.

### Additional functionality

1. Testing: run `npm run test` to test endpoint and server and project utilities. You will see result in terminal.
2. Format: run `npm run format` to format project code using prettier. You can adjust `.prettierrc.json` file for personalized configuration according to [prettier docs](https://prettier.io/docs/en/configuration.html).
3. Linting: run `npm run lint` to lint the project code. You can edit `.eslinrrc.js` See: [ESLint Documentation](https://eslint.org/docs/latest/user-guide/configuring/).

## Project Dependancies:

1. Typescript
2. Sharp
3. Nodemon
4. Prettier
5. ESLInt
6. Jasmine
7. Supertest
8. nodemon
9. dotenv