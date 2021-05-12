var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()
var dynamo = new aws.DynamoDB.DocumentClient({region: 'us-east-2'});

//This function creates a profile when a new user is signed up
//The username and email are the same as the ones the user used to register. A default profile picture is asigned

exports.handler = async (event, context) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        
        let defaultProfilePicture = {
            bucket: "",
            region: "",
            key: "default.png"
        }

        let params = {
            Item: {
                id: event.request.userAttributes.sub,
                __typename: 'Profile',
                username: event.userName,
                email: event.request.userAttributes.email,
                profilePicture: defaultProfilePicture,
                createdAt: date.toISOString(),
                updatedAt: date.toISOString(),
            },
            TableName: process.env.PROFILETABLE
        }

        try {
            await dynamo.put(params).promise();
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};