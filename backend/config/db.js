import mongoose from 'mongoose';

/**
 * Establishes connection to MongoDB Atlas or local instance.
 * Handles graceful shutdown on process termination.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Mongoose 6+ handles these automatically, but explicit for clarity
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit with failure — cannot run without DB
  }
};

// Graceful shutdown handlers
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed via app termination');
  process.exit(0);
});

export default connectDB;