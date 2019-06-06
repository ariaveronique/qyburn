// This is a test file.  Nothing more, nothing less.

// Load the AWS SDK
var AWS = require('aws-sdk');

// Load credentials
var credentials = new AWS.SharedIniFileCredentials({profile: 'qyburn'});
AWS.config.credentials = credentials;

var bucketName = 'pc-testaudio';

// Create the S3 service object
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the bucket params to search for
var bucketParams = {
    Bucket : bucketName
};

// List the objects
s3.listObjects(bucketParams, function(err, data) {
    if (err) 
	console.log("Error: ", err);
    else
	console.log("Success: ", data);
});
