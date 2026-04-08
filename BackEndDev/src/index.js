import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    "path": "./env"
})


connectDB();
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