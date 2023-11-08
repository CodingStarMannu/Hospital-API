const mongoose = require('mongoose');

// const DB = 'mongodb+srv://manojpant097:manoj1234@hospitaldb.flvmdld.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(DB, {
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

// db.once('open', function () {
// 	console.log('Connected to Database :: Mongodb');
// });

// module.exports = mongoose;

mongoose.connect('mongodb+srv://manojpant097:manoj1234@hospitaldb.flvmdld.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;









