const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = mongodb;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        console.log('Unable to connect to db', error);
        return;
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Razvan',
    //     age: 27
    // }, ( error, result ) => {
    //     if(error){
    //         console.log('Error while inserting in db', error);
    //         return;
    //     }

    //     console.log(result.ops);
    // });

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 23
        }, {
            name: 'Popescu',
            age: 50
        }], (error, result) => {
            if(error){
                console.log('Error while inserting in db', error);
                return;
            }
    
            console.log(result.insertedIds);
        })
});