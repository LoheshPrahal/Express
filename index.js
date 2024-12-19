const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!");
//     // res.send("Hello! We got your request!");
//     // res.send({ color: 'red' });
//     // res.send("<h1>This is my webpage</h1>");
// })

app.get('/', (req, res) => {
    res.send('This is the homepage!');
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!!! This is different than a get request!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!');
})
// /cats => 'meow'
// /dogs => 'woof'
// / => home

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);
})

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Browsing the post id ${postId} in the ${subreddit} subreddit!!!`);
});

app.get("/search", (req, res) => {
    const { q, color } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched");
    }
    res.send(`<h1>Search results for ${q} with color ${color} is retrieved</h1>`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
})
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})