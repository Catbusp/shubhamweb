import { MongoClient } from 'mongodb';

// MongoDB URI (Replace with your actual MongoDB connection string)
const uri = 'mongodb+srv://internsinfinity:StGXTMW1ke1yDtWw@cluster0.2pudp0n.mongodb.net/Admin_data';

export default async function handler(req, res) {
  // Check if the request is a POST method
  if (req.method === 'POST') {
    // Destructure the blog data from the request body
    const { position, salary, job_description, location, experience } = req.body;


    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(uri);

      const db = client.db('Admin_data');
      const blogCollection = db.collection('jobs'); // Assuming the collection name is "blogs"

      // Prepare the new blog post data
      const newBlog = {
        position,
        salary,
        job_description,
        location,
        experience
    
    };

      // Update the document to add the new blog to the BlogDetails array
      const updatedData = await blogCollection.updateOne(
        {}, // The query is empty, so it will match the first document it finds
        { $push: { JobDetails: newBlog } } // Push the new blog entry into the array
      );

      // Send a success response
      if (result.modifiedCount > 0) {
        res.status(200).json({ success: true, message: 'Blog added successfully!' });
      } else {
        res.status(404).json({ message: 'Blog not found or could not be added' });
      }
    

      client.close(); // Close the MongoDB connection
    } catch (error) {
      // Handle any errors that occur
      res.status(500).json({ error: error.message, name: 'ServerError' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


