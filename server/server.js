const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// require config
require('./config/mongoose.config');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require routes
require('./routes/user.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );