
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
// This is my databass
const db = [
    'Welcome to Send It!'
];
// When GET request comes in,
// send back all the messages
app.get('/', (req, res) => {
    res.json(db);
});

// When POST request comes in,
// add new message to databass
app.post('/', (req, res) => {
    console.log(req.body.message);
    db.push(req.body.message);
    res.json({
        'message': req.body.message
    })
});

app.listen(31337, () => {
    console.log("You're app is lit!");
});