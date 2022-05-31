// const mongoose = require('mongoose')

// const connectDB = async () => {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
// console.log("MongoDb connected");

// }

// module.exports =  connectDB

module.exports = {
    MONGOURI : "mongodb+srv://New-insta:6Qf40hovZoYoq3Zh@cluster0.eqzio.mongodb.net/?retryWrites=true&w=majority",
    JWT_SECRET : "secret"
}