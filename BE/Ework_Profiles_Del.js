/*
*****************************************************
*    ____          _    _ _____            __  __   *
*   |  _ \   /\   | |  | |  __ \     /\   |  \/  |  *
*   | |_) | /  \  | |__| | |__) |   /  \  | \  / |  *
*   |  _ < / /\ \ |  __  |  _  /   / /\ \ | |\/| |  *
*   | |_) / ____ \| |  | | | \ \  / ____ \| |  | |  *
*   |____/_/    \_\_|  |_|_|  \_\/_/    \_\_|  |_|  *
*                                                   *
*****************************************************
*/
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { id } = event.pathParameters;

  const params = {
    TableName: "eworkProfiles",
    Key: {
      userId: id
    }
  };

  try {
    const data = await documentClient.delete(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch(err) {
    responseBody = `Unable to delete product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin":"*"
    },
    body: responseBody
  };

  return response;
};