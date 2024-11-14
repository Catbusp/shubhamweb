import { MongoClient } from 'mongodb';

// Connection URL for MongoDB (Ensure to replace this with your actual MongoDB connection string)
const uri = 'mongodb+srv://internsinfinity:StGXTMW1ke1yDtWw@cluster0.2pudp0n.mongodb.net/Admin_data';

export default async function handler(req, res) {
  // Connect to MongoDB
  const client = await MongoClient.connect(uri);

  const db = client.db('Admin_data');
  const jobCollection = db.collection('jobs'); // Assuming the collection name is "jobs"

  if (req.method === 'GET') {
    try {
      // Fetching data from the "jobs" collection
      const existingData = await jobCollection.findOne({});
      
      if (existingData) {
        res.status(200).json(existingData); // Return the fetched data as JSON
      } else {
        res.status(404).json({ message: 'No data found' }); // Handle case where no data exists
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error }); // Handle error
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Handle unsupported methods
  }

  client.close(); // Close the MongoDB connection
}
