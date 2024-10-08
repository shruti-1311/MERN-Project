import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

//configure env
dotenv.config();

//database config
connectDB();


// rest object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/',(req,res) => {
    res.send('<h1>welcome to ecommerce app</h1>')
});

//PORT
const PORT = process.env.PORT || 8001;

//run listen

app.listen(PORT, () => {
    console.log(
        'Server Running mode on ${process.env.DEN_MODE} port ${PORT}'.bgCyan.white);
});
