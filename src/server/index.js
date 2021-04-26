const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const publicPath = path.join(__dirname,'..', 'public');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));

    
 });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(port, () => console.log(`Listening on port ${process.env.PORT || 5000}!`));
