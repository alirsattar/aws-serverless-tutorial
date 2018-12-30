"use strict";
const mailer = require("./mailer");

module.exports.s3_notification = (event, context, callback) => {
  // extract S3 data from the event object

  const uploadData = event.Records.map(record => {
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    };
  })[0];

  // generate an email using the data above
  mailer.generateContent(uploadData).then(content => {
    console.log(content.subject);
    console.log(content.textBody);
    console.log(content.htmlBody);
  });

  // send the email

  // send a response

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
