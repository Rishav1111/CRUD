const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'User';

const client = new MongoClient(url);

async function dbConnection(){

    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Profiles');
}

module.exports = dbConnection;