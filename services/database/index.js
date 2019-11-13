const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CONNECTION_STRING;

/**
 * asdasd
 */
module.exports.connectToDatabase = () => {
  console.log('Connecting to MongoDB...');
  return mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
};
