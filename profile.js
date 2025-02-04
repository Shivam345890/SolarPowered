const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
});


app.post('/update-profile', (req, res) => {
    const { username, email } = req.body;

    

   
    res.json({ success: true, message: 'Profile updated successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
