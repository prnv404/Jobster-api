require('dotenv').config()
const mockData = require('./mock-data.json')
const connectDb = require('./db/connect')
const Job = require('./models/Job')

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    await Job.deleteMany({})
    await Job.create(mockData)
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
start()
