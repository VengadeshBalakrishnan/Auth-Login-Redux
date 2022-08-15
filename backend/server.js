import express from 'express'
import dotenv from 'dotenv'
import dataBaseConnection from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, invalidDetails } from './middleware/errorMiddleware.js'

dotenv.config();
dataBaseConnection();
const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use(invalidDetails);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
  )
)
