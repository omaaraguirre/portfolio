import mongoose from 'mongoose'

const connectMongo = (connectionString) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log(`Connected to MongoDB`))
    .catch(error => console.log('Error connecting to MongoDB:', error.message))
}

export default connectMongo
