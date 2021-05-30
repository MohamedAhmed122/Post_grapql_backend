const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://SmartDev:SmartDev@cluster0.3xp94.mongodb.net/db?retryWrites=true&w=majority";

module.exports = connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`mongodb connected on ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error is comming from mongo connection ${error.message}`);
    process.exit(1);
  }
};
// export default connectDB;
