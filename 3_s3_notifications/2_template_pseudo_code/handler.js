"use strict";

module.exports.s3_notification = (event, context, callback) => {
  // extract S3 data from the event object

  // generate an email using the data above

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
