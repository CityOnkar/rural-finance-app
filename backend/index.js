const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const userId = "USER#123";

    const params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
            ":pk": userId
        }
    };

    const result = await dynamo.query(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(result.Items)
    };
};
