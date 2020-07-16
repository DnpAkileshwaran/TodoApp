const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const TodoApi = require('./routes/api/todos');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());

// body-parser middleware
app.use(bodyParser.json());

app.use('/api/todos',TodoApi);


const mongoURI = 'mongodb://127.0.0.1:27017';

const mongoCONFIG = { useUnifiedTopology: true,useNewUrlParser: true };

mongoose
  .connect(mongoURI,mongoCONFIG)
  .then( () => console.log('Connected to mongo server') )
  .catch( err => console.log(err) )

app.listen(5000, () => console.log('Server started at port 5000'));




