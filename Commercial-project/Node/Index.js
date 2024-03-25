// import env from '../Node/env';

const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/router/userRouter')
const app = express();
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', router)

// app.get('/api', (req, res) => {
//     res.send('Hello from our server!')
// })

mongoose.connect('mongodb+srv://mamathawhatstool:Whatstool123@whatstool.3o1dvxu.mongodb.net/project1')
  .then(() => console.log('Connected!'));

app.listen(8080, () => {
    console.log('server listening on port 8080')
})