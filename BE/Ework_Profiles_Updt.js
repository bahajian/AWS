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

  //const { id, firstname, lastname,birthDate,phone,email,time_Zone,address,postalCode,picture,companyName,groupMemberId,sex,linkedinProfile,educationLevel,occupation,title } = JSON.parse(event.body);
    const firstname="gholsm";
    const lastname="gholuuum sia";
    const birthDate="";
    const phone="";
    const email="";
    const time_Zone="";
    const address="";
    const postalCode="";
    const picture="";
    const companyName="";
    const groupMemberId="";
    const sex="";
    const linkedinProfile="";
    const educationLevel="";
    const occupation="";
    const title="";
    const id="1";
  const params = {
    TableName: "eworkProfiles",
    Key: {
      userId: id
    },
    UpdateExpression: "set firstname = :f1, lastname=:f2, birthDate=:f3, phone=:f4, email=:f5, time_Zone=:f6, address=:f7, postalCode=:f8, picture=:f9, companyName=:f10, groupMemberId=:f11, sex=:f12, linkedinProfile=:f13, educationLevel=:f14, occupation=:f15, title=:f16",
    ExpressionAttributeValues: {":f1": firstname,":f2": lastname,":f3": birthDate,":f4": phone,":f5": email,":f6": time_Zone,":f7": address,":f8": postalCode,":f9": picture,":f10": companyName,":f11": groupMemberId,":f12": sex,":f13": linkedinProfile,":f14": educationLevel,":f15": occupation,":f16": title},

    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch(err) {
    responseBody = `Unable to update product: ${err}`;
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
