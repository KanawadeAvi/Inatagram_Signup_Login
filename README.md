Developed a web application leveraging Node.js for efficient server-side logic.
Utilized Express.js to manage routing and middleware for streamlined application flow.
Integrated MySQL for robust database management and secure data handling.
Designed dynamic and interactive user interfaces using EJS templating.




How to run the project
 - clone the repository
 - give command npm install
 - npm install mysql ejs express util
 - run file server.js using command node server.js or nodemon server.js
 - server is running on  http://localhost:1000



Database Creation

command-
     CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            username VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL
          );



