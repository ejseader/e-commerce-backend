# E-Commerce Back End

## Table of Contents
---
### - [Description](#description)
### - [Screencaps](#screencaps)
### - [Walkthroughs](#walkthroughs)
### - [Installation and Usage](#installation)
### - [License](#license)
### - [Contributing](#contributing)
### - [Questions](#questions)<br><br>

## Description
---
### The E-Commerce Back End App allows users to test CRUD functionality of a seeded e-commerce database using the Insomnia API client. <br><br>

## Screencaps
---
![Screencap 1 of E-Commerce Back End](/images/screenshot1.png)
![Screencap 2 of E-Commerce Back End](/images/screenshot2.png)
![Screencap 3 of E-Commerce Back End](/images/screenshot3.png)
![Screencap 4 of E-Commerce Back End](/images/screenshot4.png)
![Screencap 5 of E-Commerce Back End](/images/screenshot5.png)
![Screencap 6 of E-Commerce Back End](/images/screenshot6.png)<br><br>

## Walkthroughs
---
[Walkthrough of E-Commerce Back End Database Creation, Seeding, and Running of Server.js](https://drive.google.com/file/d/1DsYGq9SpsW_Li3GdaQmaHQsM7oCaivGj/view)<br>
[Walkthrough of E-Commerce Back End Insomnia Session](https://drive.google.com/file/d/1UWKyu6Ou9Pzqod5stuS_CzcP4PpOGC-l/view)<br><br>

## Installation
---
### The app is built in the [Node.js](https://nodejs.org/en/download/) environment, with the npm packages [Express](https://www.npmjs.com/package/express), [Sequelize](https://www.npmjs.com/package/sequelize), [MySQL2](https://www.npmjs.com/package/mysql2), and [DotEnv](https://www.npmjs.com/package/dotenv), and [Nodemon](https://www.npmjs.com/package/nodemon). For testing, please install the [Insomnia API client](https://insomnia.rest/download). 

### Please use the following commands to initialize the app and install necessary dependencies:
```
npm init -y 
npm install express sequelize mysql2 dotenv nodemon
```

### Once installed, please add your MySQL credentials to a .env file to initialize the connection to the server, and then in the MySQL shell, source the schema.sql file in the db folder to establish the database. Exit the shell and type the command "npm run seed" to see the database and create the necessary tables. From there, simply type the command "npm run watch" to launch the server.js with nodemon and launch an Insomnia session to test the CRUD functionality of the database. <br><br>

## License
---
### This project carries with it the [MIT License](https://opensource.org/licenses/MIT)<br><br>

## Contributing
---
### For any comments, suggestions, or otherwise, please feel free to contact me.<br><br>

## Questions
---
### Please contact me with any questions:
<ul>
<li>GitHub: <a href="https://github.com/ejseader">@ejseader</a></li>
<li>Email: <a href="mailto:ejseader@gmail.com">ejseader@gmail.com</a></li>
</ul>