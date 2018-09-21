# node_assessment_lbg

## Steps to setup the project

- git clone https://github.com/charan225/node_assessment_lbg.git
- npm install
- npm start

Server starts on port 3001 by default and serves the greet.txt file content in browser.

The following repository is a node assessment. Here are the points addressed:

### Nodejs server that listens on port 3001 and outputs a file content from any local directory (greet.txt) 

URL - http://localhost:3001
This includes a normal text file as my home page.

### Nodejs server that serves as a RESTFUL api that takes two parameters in a GET call and produces their product

URL(GET) - http://localhost:3001/api/product/{number1}/{number2}
Output - { product of two parameters : (number1* number2)}

### Nodejs server that serves as a RESTFUL  api that accepts a String as an input name in a POST call and returns the first non-repeating character in the String

URL(POST) - http://localhost:3001/api/string
POST Data : { name : 'abbcdae' }
Output - { First non repeating character: 'c' }

### Nodejs server that serves as a RESTFUL  api that accepts a file path in a POST call and writes them to the disk(uploads folder).

URL(POST) - http://localhost:3001/api/upload
POST : { filePath: '/filepath' }

File gets written to uploads directory of project's root folder.