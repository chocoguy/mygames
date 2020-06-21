const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const games = require('./routes/games');
const path = require('path');
const cors = require('cors')

const app = express();
require('dotenv').config()
app.use(cors())

//bodyparser middleware
app.use(bodyParser.json());



//connect to database
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Databse connected');
    }catch(err){
        console.error(err.message);
    }
}

connectDB()

//use routes
app.use('/api/games', games)

//Serve static assets (from react build folder)
//if developing comment code below

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   });
   //end of static


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));