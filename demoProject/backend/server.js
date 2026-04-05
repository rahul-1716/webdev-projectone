import express from 'express';
const app = express();

app.get('/', (req,res) => {
    res.send("Server is ready")
})


/**
 * app.use(express.static('dist')); 
 * when serving static files of
 * front end from a 
 * js framework/library 
 * the / route response wouldn't work so it shouldn't be written
 * bad industry practice
 */


const port = process.env.PORT || 3000;

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
      "id": 1,
      "type": "programming",
      "setup": "Why do programmers prefer dark mode?",
      "punchline": "Because light attracts bugs."
    },
    {
      "id": 2,
      "type": "general",
      "setup": "Why don’t skeletons fight each other?",
      "punchline": "They don’t have the guts."
    },
    {
      "id": 3,
      "type": "programming",
      "setup": "Why did the developer go broke?",
      "punchline": "Because he used up all his cache."
    },
    {
      "id": 4,
      "type": "general",
      "setup": "Why did the math book look sad?",
      "punchline": "Because it had too many problems."
    },
    {
      "id": 5,
      "type": "programming",
      "setup": "How do you comfort a JavaScript bug?",
      "punchline": "You console it."
    }
    ];
    res.send(jokes);
});


app.listen(port, () => {
    console.log(`Server running at port: ${port}`);   
})