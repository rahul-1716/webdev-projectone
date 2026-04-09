import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'


dotenv.config({
    "path": "./env"
})


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error :", error);
        throw error;
    })

    app.listen(process.env.PORT || 4000, () => {
        console.log("Server is running at", process.env.PORT);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed", error);
})
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello Space")
// })

// app.listen(process.env.PORT, () => {
//     console.log(`Listening to port ${process.env.PORT}`); 
// })

// app.get('/space', (req, res) => {
//     res.send('spacedotnishad')
// }) 

// app.get('/login', (req,res) => {
//     res.send('<h1> Login karna Bro </h1>')
// })