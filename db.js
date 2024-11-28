const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name// Set up MongoDB connection
const connectDB = async () => {
  try {
    // Replace <dbname>, <username>, <password>, and <cluster> with your credentials
    const uri = 'mongodb://127.0.0.1:27017/mydatabase'; // For local
    // const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority'; // For Atlas

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the database connection
//

module.exports = connectDB;