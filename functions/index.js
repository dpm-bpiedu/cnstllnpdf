const functions = require('firebase-functions');

const {
  generatePDF
} = require('./api');

module.exports = {
  generatePDF: functions.https.onRequest(generatePDF)
}
