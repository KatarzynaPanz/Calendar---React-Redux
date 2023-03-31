# Calendar - React&Redux

https://user-images.githubusercontent.com/91606497/229059921-6c7482ee-ad6e-4b8b-9aea-7562f9e13d6c.mp4

## About project
The aim of the project was to create an application useful for recording dates of meetings. The Redux library was used in this project. Redux strips away responsibility for state management from each individual component and puts it in the hand of a single store that holds data from anywhere in the application.

## Features
1. A validated form created to provide meeting data (name, surname, date, hour, email address)
2. A list of meetings displayed on the screen
3. Meetings are sent by local REST API created by JSON server and stored in data.json file.

## Technologies
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/-Redux-black?style=for-the-badge&logo=Redux&logoColor=pink)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Installation and configuration
The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), follow the steps below to be able to use the application.
- Install all npm packages using command:
````
npm i
````
- To start develop mode use command:
````
npm start
````
- If you don't have JSON server installed on your device use command:
````
npm install json-server -g
````
- To run JSON server use command:
````
json-server --watch ./db/data.json --port 3005
````
- From now on, the application is available at:
````
http://localhost:8080
````
* Database is available at:
````
http://localhost:3005/data
````

## Author
Linkedin - [Katarzyna Panz](https://www.linkedin.com/in/katarzyna-panz-584399228/)

## Special thanks
Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.

