import mongoose from 'mongoose'

const connectMongo = async () => {
    
  if (mongoose.connections[0].readyState) {
    console.log('Database already connected')
    return
  }
  mongoose
    .connect(
      'mongodb://' +
        process.env.COSMOSDB_HOST +
        ':' +
        process.env.COSMOSDB_PORT +
        '/' +
        process.env.COSMOSDB_DBNAME +
        '?ssl=true&replicaSet=globaldb',
      {
        auth: {
          username: process.env.COSMOSDB_USER,
          password: process.env.COSMOSDB_PASSWORD,
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
        tlsInsecure: true,
      },
    )
    .then(() => console.log('database connected'))
    .catch((err) =>
      console.log('error connecting database', err),
    )
}
export default connectMongo