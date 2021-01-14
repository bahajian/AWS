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

AWS.config.update({ region: "us-east-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"});

  let responseBody = "";
  let statusCode = 0;

  const { id, firstname, lastname,birthDate,phone,email,time_Zone,address,postalCode,picture,companyName,groupMemberId,sex,linkedinProfile,educationLevel,occupation,title } = JSON.parse(event.body);

  const params = {
    TableName: "eworkProfiles",
    Item: {
      userId: id,
      firstname: firstname,
      lastname: lastname,
      birthDate:birthDate,
      phone:phone,
      email:email,
      time_Zone:time_Zone,
      address:address,
      postalCode:postalCode,
      picture:picture,
      companyName:companyName,
      groupMemberId:groupMemberId,
      sex:sex,
      linkedinProfile:linkedinProfile,
      educationLevel:educationLevel,
      occupation:occupation,
      title:title
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to put user data`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  };

  return response;
};