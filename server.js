const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();

const db = require('./config/key').MongoURI;
// Connect to mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Mongo DB connected'))
    .catch(err=>console.log(err))
app.use(express.urlencoded({ extended: false }));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');



  const callLogRouter = require('./routes/callLog');
  const callRouter = require('./routes/call');
  const contactsRouter = require('./routes/contacts');
  
  app.use('/', callLogRouter);
  app.use('/calls', callRouter);
  app.use('/contacts', contactsRouter);
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

