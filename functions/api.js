const rp = require('request-promise');
const functions = require('firebase-functions');

const fs  = require('fs');

const content = "<h1>PDF test>/h1>";

const options = {
  method: 'POST',
  uri: 'https://docraptor.com/docs',
  body: {
    "user_credentials": `${functions.config().dr.key}`,
    "type": "pdf",
    "document_content": "<html><body>Hello World!</body></html>",
    "prince_options": {
      "media": "screen"
    }      
  },
  json: true // Automatically stringifies the body to JSON
};

const generatePDF = () => {

  rp(options)
  .then(function(body) {
    console.log(body);
  })

}

module.exports = {
  generatePDF
}